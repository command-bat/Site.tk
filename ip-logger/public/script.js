const ws = new WebSocket('wss://ip-logger-rho.vercel.app/');

ws.onmessage = (event) => {
    const ipList = JSON.parse(event.data);
    const ul = document.getElementById('ip-list');
    ul.innerHTML = '';
    ipList.forEach(ip => {
        const li = document.createElement('li');
        li.textContent = ip;
        ul.appendChild(li);
    });
};
