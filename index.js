var express = require('express');
var app = express();
var mysql = require('mysql');
var games = require('./routes/games');

var con = mysql.createConnection({
  host: "localhost:8080",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/games', games);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});