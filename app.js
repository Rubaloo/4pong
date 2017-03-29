var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send(__dirname + '/src/init.html');
})
 
app.listen(3000)