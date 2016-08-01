var express = require('express');
var app = express();
var http = require('http');



//****************************************

 HOW TO CALL ALCHEMY NEWS API
 Author :- Shubhradeep Nandi 
//****************************************


app.get('/listdata', function (req, res) {
	console.log("Inside http get - 1")


var request = require('request');
request('http://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=YOURAPIKEY&return=enriched.url.title&start=1469404800&end=1470092400&q.enriched.url.enrichedTitle.entities.entity=|text=IBM,type=company|&q.enriched.url.enrichedTitle.docSentiment.type=positive&q.enriched.url.enrichedTitle.taxonomy.taxonomy_.label=technology%20and%20computing&count=2&outputMode=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) 
     }
})

});


var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
server.listen(port, function(){
	console.log('Express server listening on port ' + port);
	console.log('To view the example, point your favorite browser to: localhost:3000'); 
});
