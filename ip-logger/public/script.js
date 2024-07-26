document.addEventListener("DOMContentLoaded", function() {
    const ws = new WebSocket('ws://localhost:5500');

    ws.onopen = function() {
        console.log('Conectado ao WebSocket');
    };

    ws.onmessage = function(event) {
        const message = JSON.parse(event.data);
        if (message.type === 'ips') {
            const allIpsElement = document.getElementById('all-ips');
            allIpsElement.innerHTML = '';
            message.data.forEach(ip => {
                const li = document.createElement('li');
                li.textContent = ip;
                allIpsElement.appendChild(li);
            });
        }
    };

    ws.onclose = function() {
        console.log('Desconectado do WebSocket');
    };

    fetch('/log-ip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('user-ip').textContent = data.ip;
    })
    .catch(error => {
        console.error('Erro ao obter o IP:', error);
        document.getElementById('user-ip').textContent = 'Não foi possível obter o IP';
    });
});
