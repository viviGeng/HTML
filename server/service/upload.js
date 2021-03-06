var fs = require('fs')
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 接收到文件后输出的保存路径（若不存在则需要创建）
        cb(null, '/Users/ruoxingeng/Documents/code/HTML/server/upload/');    
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        cb(null, file.originalname);  
    }
});
var Upload = multer({ storage: storage });
var upload = {
    start: function (app) {
        app.get('/upload', function (req, res, next) {
            var data = fs.readFileSync('/Users/ruoxingeng/Documents/code/HTML/client/pages/form.html', 'utf8');
            res.send(data);
        });
        app.get('/uploadm', function (req, res, next) {
            var data = fs.readFileSync('/Users/ruoxingeng/Documents/code/HTML/client/pages/form_multi.html', 'utf8')
            res.send(data);
        });

        app.post('/upload-single', Upload.single('logo'), function (req, res, next) {
           /*  var f = req.file;
            console.log('f', f)
            var oname = f.originalname;
            var t = oname.split(".")[0];
            console.log('oname,t', oname, t) */
            //console.log('req',req.file)
            //res.sendFile(__dirname+'/'+req.file.path)
            res.send('Upload single file successfully!')
        });
        app.post('/upload-multi', Upload.array('logo', 2), function (req, res, next) {
            res.send('Upload multiple files successfully!')
        });
    }
}
module.exports = upload