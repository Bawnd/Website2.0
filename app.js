const express = require('express')
const app = express()

app.use(express.static('bon'))






app.get('/', (req, res) => res.send('Hello World!'))

app.post("/", function(req, res){
	console.log("POSTing, not GETting");
	res.send("Got a post request");
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
