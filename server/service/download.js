var fs = require("fs")
var url = require("url")
var utils = require("../utils")
var path = require("path")
var download = {
  start: function(app) {
    app.get("/down", function(req, res) {
      var data = fs.readFileSync(
        "/Users/ruoxingeng/Documents/code/HTML/client/index.html",
        "utf8"
      )
      res.send(data)
    })
    app.post("/download", function(req, res) {
      console.log("req.body: ", req.body)
      const data = req.body.data
      console.log("data", data)
      res.setHeader("Access-Control-Allow-Origin", "*")
      path = "/Users/ruoxingeng/Documents/code/HTML/server/upload/" + data
      res.download(path)
      console.log('download!!')
      //res.sendFile(path)

      /* var f = fs.createReadStream(path)
      res.writeHead(200, {
        "Content-Type": "application/force-download",
        "Content-Disposition": "attachment; filename=NW.js.docx"
      })
      f.pipe(res) */
    })
    app.post("/getList", function(req, res) {
      var listlink = fs.readdirSync(
        "/Users/ruoxingeng/Documents/code/HTML/server/upload"
      )
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.send(listlink)
    })

    app.get("/downfile", function(req, res) {
      //第一种方式
      res.setHeader("Access-Control-Allow-Origin", "*")
      const file = req.query.file
      console.log('file',file)
      var path = utils.getPath(`/../upload/${file}`)
      console.log('path',path)
      res.download(path)

      //第二种方式
      // var path = utils.getPath("/../upload/index.js");
      // var f = fs.createReadStream(path);
      // res.writeHead(200, {
      //     'Content-Type': 'application/force-download',
      //     'Content-Disposition': 'attachment; filename=test.js'
      // });
      // f.pipe(res);
    })

    app.get("/downfile2/*", function(req, res) {
      //第一种方式
      const file = req.params[0]
      var staticPath = utils.getPath(`/../upload/${file}`)
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.download(staticPath)
      console.log("path", path.resolve("upload", file))

      //第二种方式
      // var path = utils.getPath("/../upload/index.js");
      // var f = fs.createReadStream(path);
      // res.writeHead(200, {
      //     'Content-Type': 'application/force-download',
      //     'Content-Disposition': 'attachment; filename=test.js'
      // });
      // f.pipe(res);
    })
  }
}
module.exports = download
