var request=require('request');
var fs=require('fs');

request('http://game36963.cn/Style/style/banner1.jpg').pipe(fs.createWriteStream('./uploads/banner1.jpg')).on('close',function(){
    console.log('成功');
});