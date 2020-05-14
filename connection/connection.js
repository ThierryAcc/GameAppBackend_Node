var express = require('express');
var app = express();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost:8080',
  user     : '',
  password : ''
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});