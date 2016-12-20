var express = require('express');
var router = express.Router();
var multer = require('multer');
var util=require('util');

router.get('/', function (req, res) {
    res.render('upload');
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('destination' + JSON.stringify(file));
        cb(null, './uploads/')
        // cb(null, 'e:/uploads/')
    },
    filename: function (req, file, cb) {
        console.log('filename' + JSON.stringify(file));
        var fileFormat = (file.originalname).split(".");
        cb(null, Date.now() + '-' + file.fieldname + "." + fileFormat[fileFormat.length - 1]);
    }
})
function fileFilter (req, file, cb) {
console.log('filter'+JSON.stringify(file));

  // 这个函数应该调用 `cb` 用boolean值来
  // 指示是否应接受该文件

  // 拒绝这个文件，使用`false`, 像这样:
//   cb(null, false)

  // 接受这个文件，使用`true`, 像这样:
    // cb(null, true)

  // 如果有问题，你可以总是这样发送一个错误:
     cb(new Error('I don\'t have a clue!'))

}

var upload = multer({ storage: storage,fileFilter:fileFilter });
router.post('/save', function (req, res) {
    upload.single('image1')(req,res,function(err){
        if(err){
            res.send('发生错误!'+err.message+'<br/>'+err.stack);
        }else{
            // router.post('/save',multer({ dest: 'uploads/'}).single('image1'), function (req, res) {
            console.log(JSON.stringify(req.file));
            console.log(JSON.stringify(req.files));
            res.send('上传成功!');
        }
    });
});

module.exports = router;