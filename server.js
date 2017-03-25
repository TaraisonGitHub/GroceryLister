
// ==== Dependencies =======================================================

var express = require('express');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require ('path');
var Promise = require('bluebird');

mongoose.Promise = Promise;

var Book = require('./models/book.js');
//var routes = require('./app/index');
//var dashboard = require('./app/create-a-list/features/dashboard');
//var home = require('./app/create-a-list/features/home');

//var xml2js = require('xml2js').parseString;
//var http = require('http'); // xml2js needs this as part of it's functionality

var app = express();
var port = 3000;

// ==== Mongoose Database ========================================

//----------------------------------------------------------------
var Grocery = require('./groceryModel.js')
//----------------------------------------------------------------

mongoose.connect('mongodb://localhost/week18day3mongoose'); //replace with my new database
var db = mongoose.connection;


db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful!");
});

// ==== Express Methods ==========================================

app.use(express.static(__dirname + "/app"));

app.use(logger('dev'));
  //(LIne 40) When extended is false, the value of the request object accepts a string or array; whe it is true it can accept any value
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



// ==== CRUD =====================================================


app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/list.html');
})
// ==== Express Event Listener ===================================

app.listen(port, function() {
    console.log("listening on port:" + port);
});



// ==== XML2JSON =========================================

var parseString = require('xml2js').parseString;
var http = require('http');
var request = require('request');
request('http://www.supermarketapi.com/api.asmx/SearchByProductName?APIKEY=1c6bcdab24&ItemName=Parsley')

console.log(request);
//var url = 'http://www.supermarketapi.com/api.asmx/SearchByProductName?APIKEY=1c6bcdab24&ItemName=Parsley'


/*

console.log(url);
function xmlToJson(url, callback) {
  var req = http.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    }); 

    res.on('timeout', function(e) {
      callback(e, null);
    }); 

    res.on('end', function() {
      parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
}


*/