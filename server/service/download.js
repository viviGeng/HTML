var fs=require('fs')
var url =require('url')
var utils=require('../utils')
var download = {
    start: function (app) {
        app.get('/down', function (req, res) {
            var data = fs.readFileSync('/Users/ruoxingeng/Documents/code/HTML/client/index.html', 'utf8');
            res.send(data);
        })
        app.post('/download', function (req, res) {
            console.log("req.body: ", req.body)
            const data = req.body.data;
            console.log("data", data)
            res.setHeader("Access-Control-Allow-Origin", "*")
            var path = utils.getPath(address);
            var path = path.split(".")[0];
            path='/Users/ruoxingeng/Documents/code/HTML/server/upload/'+path;
            res.sendFile(path)
        });
        app.post('/getList', function (req, res) {
            var listlink = fs.readdirSync('/Users/ruoxingeng/Documents/code/HTML/server/upload')
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.send(listlink)
        })
        
    }
}
module.exports = download;