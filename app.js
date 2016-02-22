var express = require('express');
var main = require('./main');

var app = express();

app.set('view engine', 'ejs');


app.get('/:num1/:operator/:num2', function (req, res) {
    var operator = req.params.operator;
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    res.render('index', {result: main[operator](num1, num2)});
});


app.listen(3200, function () {
    console.log('Starting a server on localhost:3200');
});