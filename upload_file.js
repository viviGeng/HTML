const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));
const storage = multer.diskStorage({
  //destination 用来设置上传文件的路径 可以接收一个回调函数， 或者一个字符串
  //如果传递一个回调函数的话，则需要确保路径有效
  destination: 'uploads/',
 
  //filename 属性可以用来指定文件上传以后保存到服务器中的名字
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now())
    //获取文件的扩展名
    //Chrysanthemum.jpg
    let fname = file.originalname;
    let extName = "";
    //判断文件是否具有扩展名
    if(fname.lastIndexOf(".") != -1){
      extName = fname.slice(fname.lastIndexOf("."));
    }
 
    //上传文件时，一般不会直接将用户的文件名直接保存的服务器中
    //一般会随机生成一个文件名
    cb(null, file.fieldname + '-' + Date.now()+extName);
  }
})
const upload = multer(
  {
    storage: storage,
    limits:{
     //限制文件的大小为200kb
     fileSize:1024*200
     }
  });
app.post("/testUpload" , (req , res)=>{
  //获取解析请求体的函数
  let fu = upload.single('photo');
  //手动调用函数来解析请求体
  fu(req , res , (err)=>{
    if(err){
      //证明上传出错了，文件大小超标
      res.send("文件太大了，请上传200kb以下的文件！！");
    }else{
      //读取请求参数
      let username = req.body.username;
      res.send("上传成功~~~");
    }
  });
});
app.listen(3333,()=>{
  console.log("success");
});
