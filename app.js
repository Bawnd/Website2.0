const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
var logger=require('morgan');
const {body, ValidationResult} = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const mysql=require('mysql2');
const connection=mysql.createConnection({
	host:'localhost',
	user: 'root',
	database:'local_testing'
});
let num=2;



app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('bon'));

app.post("/info", function(req, res){
	connection.query(
	/*'SELECT * FROM `website_contact_info` WHERE `Name` = ? AND `Email` = ? AND `Message` = ?',
	[req.body.name,req.body.email,req.body.message],
		function(err, results){
			console.log(err);
		}*/
	'INSERT INTO local_testing.website_contact_info Values(?, ?,?,?)',
	[num,req.body.name,req.body.email,req.body.message],
		function(err, results){
			console.log(err);
			num++;
		})
	console.log(req.body);
	console.log("Name: ", req.body.name);
	console.log("Email: ", req.body.email);
	console.log("Message: ", req.body.message);
	res.send("back");
});



app.listen(PORT, () => console.log('Example app listening on port 5000!'))
