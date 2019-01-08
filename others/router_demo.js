var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('get request to homepage')
})
app.post('/',function(req,res){
    res.send('post request to homepage')
})