require('dotenv').config();

console.log(process.env.TEST_API);
console.log(process.env.TWITTER_CONSUMER_KEY) 


var Twitter = require('twitter');

var keys = require('./keys.js');

function twitter () {


var client = new Twitter(keys.twitter);

var params = {
    screen_name: 'Jimmy_Two_Timez',
    count: 10
};

var input = process.argv[2]

client.get('statuses/user_timeline', params, function (error, tweets, response) {
    console.log(tweets);
     (!error);
});
}
twitter()
// function gotData(err, data, response) {
//     var tweets = data.statuses;
//     for (var i = 0; i < tweets.length; i++)
//     console.log(tweets[i].text);
// };