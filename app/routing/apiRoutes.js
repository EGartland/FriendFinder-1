// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var app = express();
var PORT = 8080;
var users = require("../data/friends.js");

// Routes
// ===========================================================
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(users);
});

app.post("/api/friends", function(req, res) {
    var closestDifference = 100;
    var difference = 0;
    var match;

    users.forEach(function(friend) {
        console.log(friend);
        console.log(req.body);

        difference = eval(friend.scores.map(function(num, index) {
            return Math.abs(num - req.body.scores[index]);
        }).join('+'));

        if (difference <= closestDifference) {
            closestDifference = difference;
            match = friend;
        }
    });
    
    res.json(match);
    users.push(req.body);

    var newUser = req.body;
    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
    console.log(newUser);
    users.push(newUser);
    res.json(newUser);

});

};