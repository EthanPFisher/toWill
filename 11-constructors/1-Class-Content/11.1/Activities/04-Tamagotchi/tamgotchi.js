// // create constructor function
// var inquirer = require("inquirer");

function DigitalPay(){
    this.hungry=false
    this.sleepy=false
    this.bored=true
    this.age=0
    this.feed = function(){
        if(this.hungry){
            console.log('That was yummy !')
            this.hungry = false;
        }else{
            console.log('No thanks! I\'m full')
        }
    }
    this.sleep = function(){
        if(this.sleepy){
            console.log('Zzzzzzz')
            this.sleepy = false
            this.bored = true
            this.increaseAge()
        }else{
            console.log('No way! I\'m not tired.')
        }
    }
    this.play = function(){
        if(this.bored){
            console.log("Yay! Let's play!")
            this.bored = false
        }else{
            console.log("Not right now. Later?")
        }
    }
    this.increaseAge = function(){
        this.age += 1
        console.log("Happy Birthday to me ! I am "+ this.age +"")
    }
    
};


DigitalPay()
// var cc = new DigitalPay();
// // console.log('CC: ', cc);
// // cc.feed()
// // cc.sleep()
// // cc.play()

// var dog = new DigitalPay();
// dog.outside = false;
// dog.bark = function(){
//     console.log("Woof! Woof!")
// }
// dog.goOutside = function(){
//     if(!this.outside){
//         console.log("Yay! I love the outdoors!")
//         this.bark()
//     }else{
//         console.log("We're already outside though...")
//     }
// }

// dog.goInside = function(){
//     if(this.outside){
//         console.log("Do we have to? Fine... ")
//     }else{
//         console.log("I'm already inside...")
//     }
// }

// // dog.bark();

// var cat = new DigitalPay();
// cat.houseCondition = 100;

// cat.meow = function(){
//     console.log("Meow! Meow!")
// }

// cat.destroyFurniture = function(){
//     if(this.houseCondition === 0){
//         this.houseCondition -= 10
//         console.log("MUAHAHAHAHAH! TAKE THAT FURNITURE!")
//         this.bored = false
//         this.sleepy = true
//     }
// }

// cat.buyNewFurniture = function(){
//     this.houseCondition += 50
//     console.log("Are you sure about that?")
// }

// // cat.meow()
// function play(){
// inquirer.prompt([
//     {
//         type: 'list',
//         message: 'Choose a Tamgotchi',
//         choices: ['Dog', 'Cat', 'Create Your Own'],
//         name: 'tamgotchi'
// }
// ]).then(answers => {
//     console.log(answers)
//     switch(answers.tamgotchi.toLowerCase()){
//         case 'dog':
//             dog.bark()
//             break;
//         case 'create your own':
//             newTamgotchi()
//             break;

//     }
        
// });
// }

//  function newTamgotchi(){
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: 'Enter your Tamgotchi\'s name',
//             name: 'name'
//     }
//     ]).then(response => {
//         var newCharacter = new DigitalPay()
//         console.log(newCharacter)
//         addUniqueMethods(newCharacter)
//     })
// }

// function addUniqueMethods(char){
//     inquirer.prompt([
//         {
//         type: 'input',
//         message: 'Enter a unique method',
//         name: 'method'

//         },
//         {
//         type: 'input',
//         message: 'What will your Tamgotchi do when this method is called?',
//         name: 'output'

//         },
//         {
//         type: 'confirm',
//         message: 'Would you like to add additional traits?',
//         name: 'addtraits',
        
//     }
//     ]).then(response => {
//         char[response.method] = function(){
//             console.log(response.output)
//         }
//         if(response.addtraits){
//             addUniqueMethods()
//         }else{
//             tamgotchis.push(char)
//             console.log("Methods(s) Added Successfully")
//             play()
//         }
        
//     })
// }

// play()