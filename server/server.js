const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
const helmet = require('helmet');
require("dotenv").config();
require("./database.js").connect();



app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(helmet());
app.use(express.json());


app.use(express.static('../client/dist/'));
app.use('/*', express.static('../client/dist/index.html'));
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '../client/dist'});
});
const http = require('http');
const httpServer = http.createServer(app);
httpServer.listen(5000, () => {
    console.log('listening on *:5000');
});

module.exports = app;
