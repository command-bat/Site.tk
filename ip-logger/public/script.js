const ws = new WebSocket('wss://site-dmc80rkp2-tiago-nascimento-laureanos-projects.vercel.app');

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
