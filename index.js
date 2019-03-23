const express = require('express');
const app = require('express')();
const http = require('http').Server(app);

app.use(express.static('public'));

http.listen(3000);

module.exports.Initialize = (iridium) => {
    
}