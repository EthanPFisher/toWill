var request = require('request');
var fs = require('fs');

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    
    request(URL, function (error, response, body) {
      if(error){
        return console.log(error)
      }
      var data = JSON.parse(body)
      // console.log(JSON.parse(body))
      // if(data.network !== null){
      //   var network = data.network;
      // }else{
      //   network = 'Network not provided'
      // }

      
      var string = ['Title: ' + data.name, 'Genre(s): ' + data.genres.join(', '), 'Rating: ' + data.rating.average, 'Network: ' + data.network.name, 'Summary: ' + data.summary].join('\n')
      console.log(string)
      var divider = '\n------------------\n'

      fs.appendFile('log.txt', string + divider, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });


    });
   
 
  };
}

module.exports = TV;
