
'use strict';

var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
exports.app = app;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mFind"
});

app.listen(3264, function(err) {
    if(err){
        throw err;
    }
    console.log("Servidor activo");
});

