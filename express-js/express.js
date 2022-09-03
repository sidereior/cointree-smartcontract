var express = require('express');
var app = express();

var things = require('C:\\Users\\alexa\\Downloads\\express\\thing.js');


app.use('C:\\Users\\alexa\\Downloads\\express\\thing.js', things);

app.listen(3000);