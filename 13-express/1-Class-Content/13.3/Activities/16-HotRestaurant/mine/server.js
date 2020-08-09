
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        customerName: "Ethan",
        phoneNumber: "123",
        customerEmail: "ethan@email.com",
        customerID: "1st"
    },
    {
        customerName: "name",
        phoneNumber: "1234567",
        customerEmail: "qwefgh",
        customerID: "2nd"
    }
]


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});


