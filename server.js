const express = require('express');

const app = express();

const port = 3000;

let array = [1,2,3];


app.get('/', function(request, response) {
    response.send('Hellow Digital Crafts ohhhh yeahhhh');
});

app.listen(port);