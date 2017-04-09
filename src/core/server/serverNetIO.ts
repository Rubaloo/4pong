import GameNetIO = require('../gameNetIO');
import socketIO = require('socket.io');

class ServerNetIO extends GameNetIO {
    constructor(server) {
        super();
        this.server = server;
        this.io = socketIO(server);
        this.socket = this.io('http://localhost:4000');

        this.handleEvents(this.socket);
    };

    private handleEvents(socket) {
        socket.on('connect', function(){
            console.log('Client: connection');
        });

        socket.on('initGame', function(game){
            console.log('Client: initGame');
            //ball = game.ball;
            //drawBall(ball);
        });

        socket.on('updateGame', function(serverGame){
            console.log('Client: updateGame');
            //ball.x = serverGame.ball.x;
            //ball.y = serverGame.ball.y;
        });

        socket.on('disconnect', function(){
            console.log('Client: disconnectec');
        });
    }
    
    update(game) {
        this.broadcast('updateGame', game);
    }

    broadcast(eventName ,data) {
        console.log('broadcastToClients: ' + eventName);
        this.io.sockets.emit(eventName, data);
    }
}

export = ServerNetIO;