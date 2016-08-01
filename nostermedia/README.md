# How to fetch data from ALCHEMY NEWS API

In this example I will show you how to make a direct rest api call to the Alchemy API NEWS
host : gateway-a.watsonplatform.net
path : /calls/data/GetNews?apikey=YOURAPIKEY&return=enriched.url.title&start=1469404800&end=1470092400&q.enriched.url.enrichedTitle.entities.entity=|text=IBM,type=company|&q.enriched.url.enrichedTitle.docSentiment.type=positive&q.enriched.url.enrichedTitle.taxonomy.taxonomy_.label=technology%20and%20computing&count=2&outputMode=json 


1. Replace YOURAPIKEY text with your alchemy api key
2. NPM install
2. NPM start
3. localhost:3000/listdata
4. See the console for the results