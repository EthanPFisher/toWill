var TV = require("./tv");

// Create a new TV object
var tv = new TV();

// Grab search command line argument
// var search = process.argv[2];
// // Joining the remaining arguments since an actor or tv show name may contain spaces
// var term = process.argv.slice(3).join(" ");

// // By default, if no search type is provided, search for a tv show
// if (!search) {
//   search = "show";
// }

// // By default, if no search term is provided, search for "Andy Griffith"
// if (!term) {
//   term = "Andy Griffith";
// }

// // Print whether searching for a show or actor, print the term as well
// if (search === "show") {
//   console.log("Searching for TV Show");
//   tv.findShow(term);
// } else {
//   tv.findActor(term);
//   console.log("Searching for TV Actor");
// }

// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var inquirer = require('inquirer')


function runSearch(){
  inquirer.prompt([
    {
    
      type: 'list',
      name: "type",
      message: "What you like to search for a show or Actor/Actress?",
      choices: ['Show', 'Actress/Actor']
    },
    {
        name: "search",
        message: "What is the name of the Show/Celebrity you'd like to search for?",
        validate: function(input){
          if(input === ''){
            console.log('\n Please enter a valid input')
            return false;
          }else{
            return true;
          }
        }
    }
  ]).then(async function(response){
    // console.log(response)
    if(response.type ===  'Show'){
      await tv.findShow(response.search)
      await searchAgain()

    }else{
      await tv.findActor(response.search)
      await searchAgain()
    }
      
  });
}

function searchAgain(){
   inquirer.prompt([
    {
    
      type: 'confirm',
      name: "confirm",
      message: "What you like to search again?",
    }
  ]).then(function(response){
    if(response.confirm){
      runSearch()
    }else{
      process.end()
    }
  })
}


runSearch();