var formidable = require('formidable'),
    http = require('http'),
    util = require('util');



http.createServer(function(req, response) {
    console.log("enter")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.send();
//   if (req.url == '/upload' && req.method.toLowerCase() == 'get') {
//     // parse a file upload
//     // var form = new formidable.IncomingForm();
//     // form.parse(req, function(err, fields, files) {
//     //   res.writeHead(200, {'content-type': 'text/plain'});
//     //   res.write('received upload:\n\n');
//     //   res.end(util.inspect({fields: fields, files: files}));
//     // });
//     res.end({message: 200, data: {prop1: "haha", prop2: 2}})
//   }else {
//       res.end({message: 200})
//   }

  // show a file upload form
//   res.writeHead(200, {'content-type': 'text/html'});
//   res.end(
//     '<form action="/upload" enctype="multipart/form-data" '+
//     'method="post">'+
//     '<input type="text" name="title"><br>'+
//     '<input type="file" name="upload" multiple="multiple"><br>'+
//     '<input type="submit" value="Upload">'+
//     '</form>'
//   );
}).listen(8888, function(){
    console.log("listen on 8888")
});