var express = require('express');
var fs = require('fs');
// 解析请求体的模块
var bodyParser = require('body-parser');
var app = express();
// 该app对象调用其他模块来去处理请求和响应
// app.use全局使用
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use((req, res, next) => {
    // 全局添加
    res.append('Access-Control-Allow-Origin', '*');
    next();
})
app.get('/list', async (req, res) => { //路由
    let data = await new Promise((resolve, reject) => {
        fs.readFile('./list.json', (err, data) => { //读取的路劲
            err ? reject(err) : resolve(data);
        })
    })
    res.send(data); //响应体返回前端的数据
})

// 
app.listen(9999); //监听
console.log('启动服务器');



//印证数据库的存不存在
// app.post('/login', (req, res) => {
//     //     res.append('Access-Control-Allow-Origin', '*'); //插入响应头，解决跨域
//     //     // 前端给后端 request
//     //     console.log(req.body);
//     //     let {
//     //         username,
//     //         password
//     //     } = req.body;
//     //     if (username === 'yao' && password === '123') {
//     //         res.send('登陆成功');
//     //     } else {
//     //         res.send('登陆失败');
//     //     }

// })