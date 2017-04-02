/** The server side app to run on node. This handles all the node/express/socket.io set up and code. */

var app = require('express')();
  serveStatic = require('serve-static'),
  server = require('http').createServer(app),
  ServerNetIO = require('./src/core/server/serverNetIO.js'),
  ServerWorld = require('./src/core/server/serverWorld.js'),
  GameCore = require('./src/core/gameCore.js');


  path = require('path');


/*** SERVER SETUP */

var serverNetIO = undefined;
var gameCore = undefined;
var serverWorld = undefined;

function setupServer() {
  serverNetIO = new ServerNetIO(server);  
  serverWorld = new ServerWorld(ball);
  gameCore = new GameCore(serverNetIO, serverWorld);
  
  setupExportResources();
  setupRouting();

  server.listen(4000);
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