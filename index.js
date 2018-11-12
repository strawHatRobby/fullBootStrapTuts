const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(9000);
