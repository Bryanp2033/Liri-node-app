var request = require('request');
var key = require("./keys.js");

var consumer_key = key.twitterKeys.consumer_key;
var consumer_secret = key.twitterKeys.consumer_secret;
var access_token_key = key.twitterKeys.access_token_key;
var access_token_secret =  key.twitterKeys.access_token_secret;

var client_id = key.spotifyKeys.client_id;
var client_secret = key.spotifyKeys.client_secret;


var keyword = process.argv[2];
var input = process.argv[3];

    switch(keyword){
        case 'movie-this':
        var movie_title = input

        if (!movie_title){
            movie_title = "Mr Nobody";
        }

        var movie_url = "http://www.omdbapi.com/?t=" + movie_title +"&plot=short&apikey=40e9cece"
        console.log(movie_url)

            request(movie_url, function(error, response, body){

                if(error){
                    return error;
                }
          
                  if(!error && response.statusCode == "200"){

          
                    var movie = JSON.parse(body)
                    
                    console.log(" ")
                    console.log("Title: " + movie.Title)
                    console.log("____________________________________")
                    console.log(" ")
                    console.log("Year: " + movie.Year)
                    console.log("____________________________________")
                    console.log(" ")
                    console.log("Imdb Rating:" + movie.imdbRating)
                    console.log("____________________________________")
                    console.log(" ")
                    console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value)
                    console.log("____________________________________")
                    console.log(" ")
                    console.log("Language: " + movie.Language)
                    console.log("____________________________________")
                    console.log(" ")
                    console.log("Movie Plot: " + movie.Plot)
                    console.log("____________________________________")
                    console.log(" ")
                    console.log("Actors: " + movie.Actors)
                    console.log("____________________________________")
                  }
                })
        break;

    }



