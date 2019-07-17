var express = require('express');
var app = express();

// app.put('/text', (req, res) => {
//     res.send('hello world');
// });

app.post('/text', function (req, res) {
    res.send('PUT request to homepage');
});


app.listen(1234);
console.log("启动成功");