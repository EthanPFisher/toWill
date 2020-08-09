var inq = require('inquirer')

inq.prompt([
    {
        type: 'list',
        message: 'Main Menu',
        choices: ['Create new item', 'Bid on existing item'],
        name: 'menu'
    }
]).then(function (res) {
    console.log(res)
    if (res.menu === 'Create new item') {
        newItemPrompt()
    } else {
        bid()
    }
})

function newItemPrompt() {
    inq.prompt([
        {
            type: 'input',
            message: 'Enter item name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter catagory:',
            name: 'category'
        },
        {
            type: 'input',
            message: 'Enter starting bid:',
            name: 'bid',
            validate: function validateAge(bid) {
                var reg = /^\d+$/;
                return reg.test(bid) || "Bid should be a number!";
            }
        }
    ]).then(function (res) {
        // create new item
        console.log(res)
    })
}

function bid() {
    // read items list
    inq.prompt([
        {
            type: 'list',
            message: 'Choose item to bid on:',
            choices: itemNames,
            name: 'item'
        },
        {
            type: 'input',
            message: 'Enter bid:',
            name: 'bid',
            validate: function validateAge(bid) {
                var reg = /^\d+$/;
                return reg.test(bid) || "Bid should be a number!";
            }
        }
    ]).then(function (res) {
        // find item with name selected
        // add bid to that item
    })
}