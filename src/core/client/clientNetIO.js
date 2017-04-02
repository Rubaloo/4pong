var io = require('socket.io');
var Emitter = require('emitter');

class ClientNetIO {
    constructor(serverUrl) {
        this.socket = io(serverUrl || 'http://localhost:4000');
        this.emiter = Emitter(this);
        this.serverUrl = serverUrl;
        handleEvents();
    };

    handleEvents() {
        io.on('connection', function(client) { 
            console.log('Server: client connected');
            emitter.emit('connection');
            client.on('disconnect', function(){
                console.log('Server: client disconected');
            });

            client.on('input', function(input) {
                //inputs.push(input);
                //processInputs(input);
                updatePhyshics(input);
                updateClientState(game);
            });

            initGame();
            client.emit('event', { id : 'client connected: ' + client.id });
         }
    )};


    
    sendInput(input) {
        console.log('sendInput');
        socket.emit('input', input);
    }

}