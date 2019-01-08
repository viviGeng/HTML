var express = require('express')
var fs=require('fs')
var url =require('url')
var app = express();
var http=require('http')
var utils=require('./utils')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

function doit(){
    console.log('enter doit')
    alert($("input[name='linklist']:checked").val());
}

app.get('/down',function(req,res){
    var data = fs.readFileSync('./list.html', 'utf8');
    res.send(data);
})
app.post('/download', function (req, res) {
    console.log("req.body: ",req.body)
    const address=req.body.address;
    console.log("address",address)
    res.setHeader("Access-Control-Allow-Origin", "*")
    var path=utils.getPath(address);
    console.log('path',path)
    //res.sendFile(path)
    var f = fs.createReadStream(path);
    res.writeHead(200, {
        'Content-Type': 'application/force-download',
        'Content-Disposition': 'attachment; filename=NW.js.docx'
      });
    f.pipe(res);
    //res.download(path)
});

app.get('/download2', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    fs.readdir(path, function(err, files){
        if (err) {
          console.log(err);
          return;
        }
        console.info(files);
      });

      const value = fs.readFileSync()
    res.sendFile(__dirname + "/upload/default")
});

app.post('/getList',function(req,res){
    var listlink=fs.readdirSync('./upload')
    res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(listlink)
})
app.post('/chosen',function(req,res){
    console.log('enter')
    console.log('req',req.body)
    res.send('get!!!!')
})
http.createServer(app).listen(3000)