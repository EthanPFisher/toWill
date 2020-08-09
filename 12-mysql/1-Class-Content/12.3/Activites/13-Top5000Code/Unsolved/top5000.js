var mysql = require("mysql");
var inq = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
});

function mainMenu() {
    inq.prompt(
        {
            type: "list",
            message: "Main Menu",
            choices: ["Search songs by specific artist", "Show artists that appear multiple times", "Dates in range", "Search for a song", "Quit"],
            name: "choice"
        }
    ).then(function (res) {
        switch (res.choice) {
            // case "display all songs":
            //     displayAll();
            //     break;
            case "Search songs by specific artist":
                searchArtist();
                break;
            case "Show artists that appear multiple times":
                multiple();
                break;
            case "Dates in range":
                datesInRange();
                break;
            case "Search for a song":
                searchSong();
                break;
            case "Quit":
                console.log("bye sucka");
                connection.end();
        }
    })
}

// function displayAll() {
//     connection.query("SELECT * FROM songs", function (err, res) {
//         if (err) throw err;
//         console.table(res);
//         mainMenu();
//     })
// }

function searchArtist() {
    inq.prompt({
        type: "input",
        message: "Enter artist to search for:",
        name: "artist"
    }).then(function (qRes) {
        connection.query("SELECT * FROM songs where artist like '%" + qRes.artist + "'", function (err, results) {
            if (err) throw err;
            console.log(results);
            mainMenu();
        });
    })
}

function multiple() {
    connection.query("SELECT artist, COUNT(*) c FROM songs GROUP BY artist HAVING c > 1;", function (err, res) {
        if (err) throw err;
        for (let i=0; i<res.length; i++) {
            console.table(res[i].artist + " has " + res[i].c)
        }
        mainMenu();
    })
}

function datesInRange() {
    inq.prompt([
        {
            type: "input",
            message: "Enter start year:",
            name: "start"
        },
        {
            type: "input",
            message: "Enter end year:",
            name: "end"
        }
    ]).then(function (qRes) {
        connection.query()
    })
}

function searchSong() {
    inq.prompt(
        {
            type: "input",
            message: "Enter a song title",
            name: "song"
        }
    ).then(function (qRes) {
        connection.query("SELECT * FROM songs where title like '%" + qRes.song + "'", function (err, results) {
            if (err) throw err;
            console.table(results);
            mainMenu();
        });
    })
}

mainMenu();