const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.static('bon'))






app.get('/', (req, res) => res.send('Hello World!'))

app.post("/", function(req, res){
	console.log("POSTing, not GETting");
	res.send("Got a post request");
});



app.listen(PORT, () => console.log('Example app listening on port 5000!'))
