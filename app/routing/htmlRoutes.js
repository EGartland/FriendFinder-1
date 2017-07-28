// Dependencies
// ===========================================================
var express = require("express");
var app = express();
var path = require("path");
var PORT = 8080;


// Routes
// ===========================================================
module.exports = function(app){
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public/survey.html"));
});

};