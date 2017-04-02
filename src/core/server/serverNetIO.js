var GameNetIO = require('../gameNetIO.js');

class ServerNetIO extends GameNetIO {
    constructor(server) {
        this.server = server;
        this.io = require('socket.io')(server);
        this.socket = io(serverUrl || 'http://localhost:4000');

        handleEvents(socket);
    };

    handleEvents(socket) {
        socket.on('connect', function(){
            console.log('Client: connection');
        });

        socket.on('initGame', function(game){
            console.log('Client: initGame');
            ball = game.ball;
            drawBall(ball);
        });

        socket.on('updateGame', function(serverGame){
            console.log('Client: updateGame');
            ball.x = serverGame.ball.x;
            ball.y = serverGame.ball.y;
            console.log(serverGame.ball.x);
        });

        socket.on('disconnect', function(){
            console.log('Client: disconnectec');
        });
    }
    
    updateStates(game) {
        server_broadcast('updateGame', game);
    }

    broadcast(eventName ,data) {
        console.log('broadcastToClients: ' + eventName);
        io.sockets.emit(eventName, data);
    }
}