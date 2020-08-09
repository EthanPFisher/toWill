var fs = require('fs')

var Show = function(name, genre, budget, summary){
    this.name = name;
    this.genre = genre;
    this.budget = budget;
    this.summary = summary;
    this.printInfo = function(){
        var divider = "\n-------------------------------------------------\n";

        var showData = '';
        for (var key in this) {
            if(typeof this[key] !== 'function'){
                showData += key.charAt(0).toUpperCase() + key.slice(1) + ': ' + this[key] + '\n';
            }
        }
        fs.appendFile("log.txt", showData + divider, function(err) {
            if (err) throw err;
            console.log(showData);
    
          });
    }
}

module.exports = Show;