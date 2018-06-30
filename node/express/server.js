/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/test', (req, res) => {
    function test() {
        var add = 9;
        return add;
    }
    console.log(test.toString());
});
app.get('/me', (req, res) => {
    const name = req.query.name; // localhost:3000?name=xxx
    res.send({
        name,
    });
});
app.post('/login', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    if (username === password) {
        res.send(`welcome ${username}`);
    } else {
        res.status(400);
        res.send('not allow to access');
    }
});
app.use((req, res, next) => { // middleware: adjust req/res
    console.log(1);
    res.hello = 'world';
    next();
});
app.use((req, res, next) => { // send error
    console.log(2, res.hello);
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        message: error.message,
    });
});

// const http = require('http');
// const server = http.createServer(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server on: ${port}`);
}).on('error', (err) => {
    console.log(err);
});
