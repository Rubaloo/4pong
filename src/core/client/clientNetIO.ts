import io = require('socket.io');
import Emitter = require('emitter');
import GameNetIO = require('../gameNetIO.js');

class ClientNetIO extends GameNetIO {
    private emiter;
    private serverUrl;
    constructor(serverUrl? : string) {
        super();
        this.socket = io(serverUrl || 'http://localhost:4000');
        this.emiter = Emitter(this);
        this.serverUrl = serverUrl;
        this.handleEvents();
    };

    private handleEvents() {
        io.on('connection', function(client) { 
            console.log('Server: client connected');
            this.emitter.emit('connection');
            client.on('disconnect', function(){
                console.log('Server: client disconected');
            });

            client.on('input', function(input) {
            });

            client.emit('event', { id : 'client connected: ' + client.id });
         }
    )};
    
    update(cWorld) {
        this.sendInput(cWorld.ball);
    }

    sendInput(input) {
        console.log('Client send Input');
        this.socket.emit('input', input);
    }
}

export = ClientNetIO;