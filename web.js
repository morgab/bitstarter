var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
   var fs = require('fs');
   var out = "valami2";
   
   out = (fs.readFileSync("index.html")).toString();

   response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
