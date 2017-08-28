var express = require('express');

var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var connection = require('./connection');
var routes = require('./routes');

connection.iniciar();
routes.config(app);

var server = app.listen(8000, function(){
    console.log('Escuchandoe el puerto  ', server.address().port);
});