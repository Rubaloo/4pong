var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/init.html');
});
 
app.listen(3000);