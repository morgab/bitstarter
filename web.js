var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = new Buffer(16);
var out = require('out');

app.get('/', function(request, response) {

  buffer = (fs.readFile("index.html"));
  response.send('valami');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
