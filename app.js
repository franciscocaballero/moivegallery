var express = require('express');
var app = express();
var request = require('request');


app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.send('hello mate!')
});

app.get('/results', function(req,res){
  request('http://www.omdbapi.com/?i=tt3896198&apikey=thewdb&s=california', function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body)
      res.render('results', {data: data});
    }
  });
});

app.get('*', function(req,res){
  res.send('oh oh Something went wrong')
});

app.listen(3000, function(){
  console.log('moive app has started')
});
