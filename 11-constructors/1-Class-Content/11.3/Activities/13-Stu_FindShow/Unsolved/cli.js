// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for


var inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'list',
        name: "type",
        message: "What type of search would you like to make?",
        choices: ['TV Series', 'Actress/Actor', 'Create A Show']
    }
  ]).then(function(userInput) {
      if(userInput.type === 'TV Series'){
          
          inquirer.prompt([
            {   
                name: "search",
                message: "What is the name of the TV Series that you would like to search for?",
                validate: function(input){
                    if(input === ''){
                        console.log("\n Invalid input. Please enter a valid search term");
                        return false;
                    }else{
                        return true;
                    }
                }
            }
        ]).then(function(show){
            // run the api call for TV series
            console.log(show.search)
        })
      }else if(userInput.type === 'Actress/Actor'){
          // run the api call for actress/actor
          inquirer.prompt([
            {   
                name: "search",
                message: "What is the name of the Actress/Actor that you would like to search for?",
                validate: function(input){
                    if(input === ''){
                        console.log("\n Invalid input. Please enter a valid search term");
                        return false;
                    }else{
                        return true;
                    }
                }
            }
        ]).then(function(celeb){
            // run the api call for TV series
            console.log(celeb.search)
        })
      }else{
        inquirer.prompt([
            {   
                name: "search",
                message: "What is the name of your TV Show?",
                validate: function(input){
                    if(input === ''){
                        console.log("\n Invalid input. Please enter a valid search term");
                        return false;
                    }else{
                        return true;
                    }
                }
            },
            {   
                name: "genre",
                message: "Which genre would you catagorize your show with?",
                validate: function(input){
                    if(input === ''){
                        console.log("\n Invalid input. Please enter a valid search term");
                        return false;
                    }else{
                        return true;
                    }
                }
            },
            {   
                name: "budget",
                message: "What is the budget for this show?",
                validate: function(input){
                    if(isNaN(input)){
                        console.log("\n Invalid input. Please enter a valid search term");
                        return false;
                    }else{
                        return true;
                    }
                }
            },
            {   
                name: "summary",
                message: "Please enter a breif summary about your show",
                validate: function(input){
                    if(input === ''){
                        console.log("\n Invalid input. Please enter a valid search term");
                        return false;
                    }else{
                        return true;
                    }
                }
            },
        ]).then(function(data){
            console.log(data)
            // run constructor function for TVShow constructor
        })
    }
  });