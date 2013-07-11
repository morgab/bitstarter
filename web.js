var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var out = require('out');

out = "valami2";

app.get('/', function(request, response) {

   response.send('valami');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
