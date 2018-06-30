const fetch = require('node-fetch');
const express = require('express');
var FormData = require('form-data');
var form = new FormData();

const apiUrl = 'https://yhcsc.cyc.org.tw/api';
//{"gym":["58","65","0"],"swim":["147","300","0"]}



const app = express();
app.get('/', (req, res, next) => {
    fetch(apiUrl, {
        method: 'POST',
        // body: {
        //     dataType: 'application/json',
        // },
        // headers: {
        //     'Content-Type': 'application/json',
        // },
    }).then((result) => {
        console.log('response', result);
        console.log('response', result.body.arrayBuffer());
        console.log('response', result.blob());
        console.log('response', result.text());
        console.log('response', result.formData());
        res.send(result.body);
    });
});

app.listen(3000, () => {
    console.log('app is listening at port 3000');
});
