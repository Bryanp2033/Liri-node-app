var SpotifyWebApi = require('spotify-web-api-node');
var request = require('request');
var Twitter = require('twitter');
var key = require("./keys.js");


var consumer_key = key.twitterKeys.consumer_key;
var consumer_secret = key.twitterKeys.consumer_secret;
var access_token_key = key.twitterKeys.access_token_key;
var access_token_secret =  key.twitterKeys.access_token_secret;

var client_id = key.spotifyKeys.client_id;
var client_secret = key.spotifyKeys.client_secret;


var keyword = process.argv[2];
var value = process.argv[3];


    switch(keyword){
        case 'movie-this':
        var movie_title = value

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

        case "my-tweets":

        var client = new Twitter({
            consumer_key: consumer_key,
            consumer_secret: consumer_secret,
            access_token_key: access_token_key,
            access_token_secret: access_token_secret
          });
           
          var params = {screen_name: 'Joel The Troll'};
          client.get('statuses/user_timeline', params, function(error, tweets, response) {

            if (error){
                console.log(error)
            }

            if (!error) {
                for(i = 0; i < tweets.length; i++){
                    console.log("Tweet #" + [i])
                    console.log("__________________________________")
                    console.log(" ")
                    console.log("Text: " + tweets[i].text);
                    console.log(" ")
                    console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
                    console.log(" ")
                    console.log("Created at: " + tweets[i].created_at);
                    console.log("__________________________________")
                    console.log(" ")
                }
            }

          });
        break;

        case 'spotify-this-song':
        
        var song_title = value

        if(!song_title){
            song_title = "The Sign"
        }

        var spotify = new SpotifyWebApi({
            clientId: client_id,
            clientSecret: client_secret
        });

        spotify.clientCredentialsGrant()
            .then(function (data){
                spotify.setAccessToken(data.body['access_token']);
                spotify.searchTracks(song_title)
                    .then(function (data){
                        var song = data.body.tracks.items[0]
                        console.log(" ")
                        console.log("Artist Name: " + song.artists[0].name)
                        console.log("__________________________________")
                        console.log(" ")
                        console.log("Song Name: " + song.name)
                        console.log("__________________________________")
                        console.log(" ")
                        console.log("Song Preview: " + song.preview_url)
                        console.log("__________________________________")
                        console.log(" ")
                        console.log("Album Name: " + song.album.name)
                        console.log(" ")
                    })
            })
    }
    



