// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "seinfeld_db"
});

// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/cast", function (req, res) {
    connection.query("SELECT * FROM actors", function (err, result) {

        var html = "<h1> Cast </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + " </p>";
            html += "<p>Coolness: " + result[i].coolness_points + " </p>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.get("/coolness", function (req, res) {
    connection.query("SELECT name, coolness_points FROM actors order by 2 desc", function (err, result) {

        var html = "<h1> Coolness </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> Name: " + result[i].name + "</p>";
            html += "<p>Coolness: " + result[i].coolness_points + " </p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.get("/attitude/:att", function (req, res) {
    var anAttitude = req.params.att;
    connection.query("SELECT name, attitude FROM actors where ?", [
        {
            attitude: anAttitude
        }
    ], function (err, result) {

        var html = "<h1> Characters who are " + anAttitude + " </h1>";

        if (result.length === 0) {
            html += "<h3>Sorry! There are no actors who are " + anAttitude + ".</h3>"
            res.send(html)
        } else {

            html += "<ul>";

            for (var i = 0; i < result.length; i++) {
                html += "<li><p> Name: " + result[i].name + "</p>";
                html += "<p>Coolness: " + result[i].attitude + " </p></li>";
            }

            html += "</ul>";

            res.send(html);
        }
    });
});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});