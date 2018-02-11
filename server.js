var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mydb', ['mydb']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/ready/'));
app.use(bodyParser.json());

app.get('/getuserslist/api', function(req, res){
	console.log('i received GET request');

	db.mydb.find(function(req, docs){
		res.json(docs);
	});
});

app.listen(4000, function(){
	console.log('app on port 4000');
});