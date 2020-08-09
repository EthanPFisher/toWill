var fs = require("fs");

var func = process.argv[2]
var text = process.argv[3]

switch (func) {
    case 'total':
        getTotal()
        break
    case 'deposit':
        addToFile()
        break
    case 'withdraw':
        addToFile()
        break
    case 'lotto':
        if (Math.floor(Math.random() * 10) === 2) {
            text = 10
        } else {
            text = -1
        }
        addToFile()
}

function getTotal() {
    fs.readFile('bank.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        var dataArr = data.split(',')
        var total = 0;

        for (var i in dataArr) {
            total += parseFloat(dataArr[i])
        }
        console.log('Total balance: ' + total)
    })
}

function addToFile() {
    if (func == 'withdraw') {
        text = '-' + text
    }
    fs.appendFile("bank.txt", ', ' + text, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('After ' + func + getTotal());
        }
    })
}


