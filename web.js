
var http = require('http');
var fs = require('fs');
var buffer = require('buffer');
var index = fs.readFile('./index.html');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/index.html', function(req, res) {
   res.send(index)
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
