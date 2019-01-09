var upload=require('./Service/upload')
var download=require('./Service/download')
var express=require('express')
var app=express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
upload.start(app);
download.start(app);
app.listen(3000, ()=>{
    console.log("listening on 3000")
})