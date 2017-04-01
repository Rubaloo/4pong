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


/**GAME FUNCTIONS*/

var ball;
var inputs = [];
var game;
var keys = {up:'w', down:'s', left:'a', right:'d'};

function initGame() {
  ball = {x : 300, y : 300}; 
  game = {'ball' : ball};
  broadcastToClients('initGame', game);
}

function processInputs(input) {
 
}

function updatePhyshics(input) {
  if(input.command === keys.left) --game.ball.x;
  else if(input.command === keys.up) --game.ball.y;
  else if(input.command === keys.right) ++game.ball.x;
  else if(input.command === keys.down) ++game.ball.y;
}

function updateClientState(game) {
  broadcastToClients('updateGame', game);
}

function broadcastToClients(eventName ,data) {
  console.log('broadcastToClients: ' + eventName);
  io.sockets.emit(eventName, data);
}