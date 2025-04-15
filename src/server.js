const WebSocket = require('ws');

// react is on port 3000
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', function connection(ws) {

    console.log('Client connected');


    ws.on('message', function incoming(message) {

        console.log('Received: %s', message);

        ws.send(`${message}`);
    });


    ws.on('close', function () {
        console.log('Client disconnected');
    });
});
