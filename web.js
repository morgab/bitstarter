var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = new Buffer(16);

app.get('/', function(request, response) {

  buffer.write(fs.readFile("index.html"));
  
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
