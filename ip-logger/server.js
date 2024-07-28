const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let ipAddresses = [];

wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    ipAddresses.push(ip);
    broadcastIPList();

    ws.on('close', () => {
        ipAddresses = ipAddresses.filter(item => item !== ip);
        broadcastIPList();
    });

    ws.on('message', (message) => {
        // Handle messages from clients if needed
    });
});

function broadcastIPList() {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(ipAddresses));
        }
    });
}

app.use(express.static('public'));

server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${server.address().port}`);
});
