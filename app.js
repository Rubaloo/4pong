/** The server side app to run on node. This handles all the node/express/socket.io set up and code. */

var app = require('express')();
  serveStatic = require('serve-static'),
  server = require('http').createServer(app),
  io = require('socket.io')(server),
  path = require('path');


/*** SERVER SETUP */
function setupServer() {
  setupIO();
  setupExportResources();
  setupRouting();

  server.listen(4000);
}

function setupIO() {
  io.on('connection', function(client){ 
    console.log('Server: client connected');
    
    client.on('disconnect', function(){
      console.log('Server: client disconected');
    });

    client.on('input', function(input){
      //inputs.push(input);
      //processInputs(input);
      updatePhyshics(input);
      updateClientState(game);
    });

    initGame();
    client.emit('event', { id : 'client connected: ' + client.id });

  });
}

function setupExportResources () {
  app.use(serveStatic(path.join(__dirname, '/node_modules/pixi.js/dist/'), {'index': 'pixi.min.js'}));
  app.use(serveStatic(path.join(__dirname, '/node_modules/keyboardjs/dist/'), {'index': 'keyboard.min.js'}));
}

function setupRouting() {
  app.get('/game', function (req, res) {
    res.sendFile(__dirname + '/src/init.html');
  });
}

setupServer();