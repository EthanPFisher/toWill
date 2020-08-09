function Programmer(name, job, age, lang) {
    this.name = name,
        this.job = job,
        this.age = age,
        this.lang = lang
    this.printInfo = function () {
        console.log('\n')
        for (var key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key.toUpperCase() + ": " + this[key])
            }
        }
        console.log('\n')
    }
}
// var me = new Programmer('Ethan', 'Full-Stack Web Dev', 21, 'Java')
// me.printInfo()

var inq = require('inquirer')

inq.prompt([
    {
        type: 'input',
        message: 'Name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Job?',
        name: 'job'
    },
    {
        type: 'number',
        message: 'Age?',
        name: 'age',
        validate: function validateAge(age) {
            var reg = /^\d+$/;
            return reg.test(age) || "Age should be a number!";
        }
    },
    {
        type: 'input',
        message: 'Favorite language?',
        name: 'lang'
    }
]).then(function (res) {
    var { name, job, age, lang } = res
    var me = new Programmer(name, job, age, lang)
    me.printInfo()
})