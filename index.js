var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('/views/index.html');
});
app.listen(3000);