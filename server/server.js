const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
const helmet = require('helmet');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(helmet());


app.use(express.static('../client/dist/'));
app.use('/*', express.static('../client/dist/index.html'));
app.get('/', (req, res) => {
    //res.sendFile('../site/dist/index.html');
    res.sendFile('index.html', {root: '../client/dist'});
});
//app.use('/*', express.static('../site/dist/index.html'));


// app.use(express.static(__dirname + '../client/dist'));
// app.get('/', (req,res) => {
//     console.log("working")
//   res.sendFile(__dirname + '../client/dist/index.html');
// });
/*
app.use(express.static('../client/dist'));
app.get('/', (req,res) => {
  res.sendFile('../client/dist/index.html');
});*/

/*app.listen(5000, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", 5000);
});
*/
const http = require('http');
const httpServer = http.createServer(app);
httpServer.listen(5000, () => {
    console.log('listening on *:5000');
});

module.exports = app;