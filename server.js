const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log('New client connected');

    socket.send('Hello from server!');

    socket.on('message', message => {
        console.log('Received from client:', message.toString('utf8'));
        socket.send('Got your message: ' + message);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
