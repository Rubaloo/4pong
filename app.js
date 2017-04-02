/** The server side app to run on node. This handles all the node/express/socket.io set up and code. */

var app = require('express')();
  serveStatic = require('serve-static'),
  server = require('http').createServer(app),
  gameNetIO = require('src/core/gameNetIO.js')

  path = require('path');


/*** SERVER SETUP */

var gameNetIO = undefined;
function setupServer() {
  setupIO();
  setupExportResources();
  setupRouting();

  server.listen(4000);
}

function setupIO() {
  serverNetIO = new serverNetIO(server);  
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