
// ==== Dependencies =======================================================

var express = require('express');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


var app = express();
var port = 5400;

app.use(express.static(__dirname + "/app"));

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