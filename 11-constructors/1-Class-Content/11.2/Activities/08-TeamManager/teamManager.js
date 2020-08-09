var inq = require('inquirer')

function Player(name, position, offence, defence) {
    this.name = name,
        this.position = position,
        this.offence = parseInt(offence),
        this.defence = parseInt(defence)
    this.goodGame = function () {
        var coin = Math.floor(Math.random() * 2)
        if (offence <= 10 && coin === 0) {
            offence++
        } else if (defence <= 10 && coin === 1) {
            defence++
        }
    }
    this.badGame = function () {
        var coin = Math.floor(Math.random() * 2)
        if (offence >= 1 && coin === 0) {
            offence--
        } else if (defence >= 1 && coin === 1) {
            defence--
        }
    }
    this.printStats = function () {
        for (var key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key.toUpperCase() + ": " + this[key])
            }
        }
        console.log("---------------")
    }
    this.isThisPlayer = function(playerName) {
        if (this.name === playerName) {
            return true
        } else {
            return false
        }
    }
}

var starters = []
var subs = []

function getPlayers() {
    if (starters.length + subs.length < 3) {
        inq.prompt([
            {
                type: 'input',
                message: 'Enter player name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter position:',
                name: 'pos'
            },
            {
                type: 'number',
                message: 'Enter offence value:',
                name: 'offence',
                validate: offence => offence < 1 || offence > 10 ? 'Value must be from 1 to 10' : true
            },
            {
                type: 'number',
                message: 'Enter defence value:',
                name: 'defence',
                validate: defence => defence < 1 || defence > 10 ? 'Value must be from 1 to 10' : true
            }
        ]).then(function (res) {
            var newPlayer = new Player(res.name, res.pos, res.offence, res.defence)
            if (starters.length < 2) {
                starters.push(newPlayer)
            } else {
                subs.push(newPlayer)
            }
            count++
            getPlayers()
        })
    } else {
        // var team = [...starters, ...subs] // combines two arrays
        for (var x = 0; x < starters.length; x++) {
            starters[x].printStats();
        }
        for (var x = 0; x < subs.length; x++) {
            subs[x].printStats();
        }
        playGame()
    }
}
getPlayers()

var gameCount = 1
var score = 0

function playGame() {
    if (gameCount < 6) {
        var offTotal = 0
        var defTotal = 0

        // TODO: calc totals outside of recursion/loop for efficiency
        for (var i in starters) {
            offTotal += starters[i].offence
        }
        for (var i in starters) {
            defTotal += starters[i].defence
        }

        var offRand = Math.floor(Math.random() * 20) + 1
        var defRand = Math.floor(Math.random() * 20) + 1

        if (offRand < offTotal) {
            score++
        }
        if (defRand > defTotal) {
            score--
        }
        console.log("The score after round " + gameCount + " is " + score)
        subOption()
        gameCount++
    } else if (score > 0) {
        console.log("YOU WON")
        for (var i in starters) {
            starters[i].goodGame()
            starters[i].printStats()
        }
    } else if (score < 0) {
        console.log("YOU LOST")
        for (var i in starters) {
            starters[i].badGame()
            starters[i].printStats()
        }
    } else {
        console.log("IT'S A TIE")
    }
}

function subOption() {
    inq.prompt(
        {
            type: 'confirm',
            message: 'Sub out a player?',
            name: 'confirm',
            default: false
        }
    ).then(function(res) {
        if (res.confirm) {
            subChoice()
        }
    })
}

function subChoice() {
    inq.prompt(
        {
            type: 'list',
            message: 'Who do you want to sub out?',
            choices: starters,
            name: 'choice'
        }
    ).then(function(res) {
        var temp = starters[0]
        for (var i in starters) {
            if (starters[i].name === res.choice) {
                temp = starters[i]
                console.log("SUCCESS")
            }
        }

        var subbedIndex = starters.indexOf(temp)
        starters[subbedIndex] = subs[0]
        subs[0] = temp
        // starters[subbedIndex].printStats()
    })
}

function playAgain() {
    inq.prompt(
        {
            type: "confirm",
            message: "Play another game?",
            name: "again",
            default: true
        }
    ).then(function(res) {
        if (res.again) {
            playGame()
        }
    })
}