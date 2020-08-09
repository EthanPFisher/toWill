
function DigitalPet() {
    this.hungry = false,
        this.sleepy = false,
        this.bored = true,
        this.age = 0,
        this.feed = function () {
            if (this.hungry) {
                this.hungry = false
                console.log("That was yummy!")
            } else {
                console.log("No thanks! I'm full.")
            }
        },
        this.sleep = function () {
            if (this.sleepy) {
                console.log("Zzz")
                this.sleepy = false
                this.bored = true
                increaseAge()
            } else {
                console.log("No way! I'm not tired!")
            }
        },
        this.play = function () {
            if (this.bored) {
                console.log("Yay! Let's play!")
                this.bored = false
                this.hungry = true
            } else {
                console.log("Not right now. Later?")
            }
        },
        this.increaseAge = function () {
            this.age++
            console.log("Happy birthday to me! I'm " + this.age + " years old!")
        }
}


var dog = new DigitalPet()

dog.outside = false
dog.bark = function () {
    console.log("Bork brork!")
}
dog.goOutside = function () {
    if (!outside) {
        console.log("Yay! I love the outdoors!")
        this.outside = true
    } else {
        console.log("We're already outside though...")
    }
}
dog.goInside = function () {
    if (outside) {
        console.log("Do we have to? Fine...")
        this.outside = false
    } else {
        console.log("I'm already inside...")
    }
}

var cat = new DigitalPet()
cat.houseCondition = 100
cat.meow = function () {
    console.log("Meow! Meow!")
}
cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
    }
}
cat.butNewFurniture = function () {
    this.houseCondition += 50
    console.log("Are you sure about that?")
}

// ====== User interface ======
inq = require("inquirer")

var questions = [{
    type: "list",
    name: "option",
    message: "Options",
    choices: ["Feed", "Sleep", "Play", "Go outside", "Go inside", "Quit"]
}];

function ask() {
    inq.prompt(questions).then( function (opt) {
        console.log(opt.option)
        if (opt.option === "Feed") {
            dog.feed()
            ask()
        } else if (opt.option === "Sleep"){
            dog.sleep()
            ask()
        } else if (opt.option === "Play") {
            dog.play()
            ask()
        } else if (opt.option === "Go outside") {
            dog.goOutside()
            ask()
        } else if (opt.option === "Go inside") {
            dog.goInside()
            ask()
        }
    });
}
ask();

// inq.prompt([
//     {
//         type: "list",
//         message: "Main menu",
//         choices: ["Tamagotchi", "Add new (out of order)", "Quit"],
//         name: "choice"
//     }
// ]).then(function (mainMenu) {
//     try {
//         if (mainMenu.choice === "Tamagotchi") {
//             dogOptions().then(function (opt) {
//                 switch (opt.option) {
//                     case "Feed":
//                         dog.feed()
//                         dogOptions()
//                         break
//                     case "Sleep":
//                         dog.sleep()
//                         dogOptions()
//                         break
//                     case "Play":
//                         dog.play()
//                         dogOptions()
//                         break
//                     case "Go outside":
//                         dog.goOutside()
//                         dogOptions()
//                         break
//                     case "Go inside":
//                         dog.goInside()
//                         dogOptions()
//                 }
//             })
//         }
//     } catch {

//     }
// })

// function dogOptions() {
//     inq.prompt([
//         {
//             type: "list",
//             message: "Options:",
//             choices: ["Feed", "Sleep", "Play", "Go outside", "Go inside", "Quit"],
//             name: "option"
//         }
//     ]).then(function (res) {
//         return res.option
//     })
// }