const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do diretório 'public'
app.use(express.static(path.join(__dirname, 'public')));

let ips = new Set();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    ips.add(ip);
    console.log(`Conectado: ${ip}`);
    ws.send(JSON.stringify({ type: 'ips', data: Array.from(ips) }));

    ws.on('close', () => {
        ips.delete(ip);
        console.log(`Desconectado: ${ip}`);
        broadcast({ type: 'ips', data: Array.from(ips) });
    });
});

function broadcast(message) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

app.post('/log-ip', (req, res) => {
    const ip = req.ip;
    ips.add(ip);
    res.json({ ip });
});

app.get('/ips', (req, res) => {
    res.json({ ips: Array.from(ips) });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
