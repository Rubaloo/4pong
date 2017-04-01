var app = require('express')();
  serveStatic = require('serve-static'),
  server = require('http').createServer(app),
  io = require('socket.io')(server),
  path = require('path');


io.on('connection', function(client){ 
  console.log('Server: client connected');
  client.on('disconnect', function(){
    console.log('Server: client disconected');
  });

  client.emit('event', { id : 'client connected: ' + client.id });
});

app.use(serveStatic(path.join(__dirname, '/node_modules/pixi.js/dist/'), {'index': 'pixi.min.js'}));

app.get('/game', function (req, res) {
  res.sendFile(__dirname + '/src/init.html');
});
 



server.listen(4000);