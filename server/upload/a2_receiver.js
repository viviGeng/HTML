 var http=require('http');
var url=require('url');

var server= http.createServer(function(req,res){
var queryObj=url.parse(req.url,true).query;
var name=queryObj.name;
var age =queryObj.age;
var sex=queryObj.sex;
res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
res.end(name+age+sex);
});

server.listen(8000,"127.0.0.1");
 