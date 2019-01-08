var express=require('express')
var url =require('url')
var app=express()
var sheep = require("./config.json")

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/getconfig',function(req,res){
    // res.send('hello world')
    const index=req.query.index;
    //var name=queryObj.name;
    //var index=req["index"];
    console.log("index",index)
    
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.sendFile(__dirname + '/config.json')
})
app.post("/postconfig", function(req,res){
    console.log("receive post 1", req.body)
    const index=parseInt(req.body.index);
    const resultSheep = sheep[index];
    console.log("index 1",index)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send({message: "ok", code: 200, data: {
        sheep: resultSheep
    }})
})
app.post("/postconfig/newfunction",function(req,res){
    console.log("receive post2", req.body)
    const index=parseInt(req.body.index);
    const resultSheep = sheep[index];
    console.log("index2",index)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send({message: "ok", code: 200, data: {
        sheep: resultSheep
    }})
})
app.listen(8000);

