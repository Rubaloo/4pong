var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){ 
  console.log('Server: client connected');
  client.on('disconnect', function(){
    console.log('Server: client disconected');
  });

  client.emit('event', { id : 'client connected: ' + client.id });
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/init.html');
});
 
server.listen(4000);