/** The server side app to run on node. This handles all the node/express/socket.io set up and code. */

import express = require('express');
import serveStatic = require('serve-static');
import http = require('http');
import path = require('path');
import ServerNetIO = require('./core/server/serverNetIO');
import ServerWorld = require('./core/server/serverWorld');
import ServerInput = require('./core/server/serverInput');
import GameCore = require('./core/gameCore');


let app = express(),
    server = http.createServer(app);


/*** SERVER SETUP */

let sNetIO = undefined,
    sWorld = undefined,
    sInput = undefined,
    gameCore = undefined;


function setupGameCore() {
  sNetIO = new ServerNetIO(server);  
  sWorld = new ServerWorld();
  sInput= new ServerInput();
  gameCore = new GameCore(sNetIO, sWorld, sInput);
}

function setupServer() {
  setupGameCore();
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