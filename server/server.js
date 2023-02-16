const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
const helmet = require('helmet');
require("dotenv").config();
require("./database.js").connection();
const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");

const User = require("./model_user.js");
const auth = require("./auth.js")

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.disable('Etag');





const http = require('http');
//const { brotliCompressSync } = require('zlib');
const httpServer = http.createServer(app);
httpServer.listen(5000, () => {
    console.log('listening on *:5000');
});

app.get("/create", (req, res) => {
    //res.status(200).send("Welcome");
    res.sendFile('index.html', {root: '../client/dist'});
});


app.use(express.static('../client/dist/'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '../client/dist'});
});



app.post("/node/register", async (req, res) => {

    try {
        const { userName, email, password } = req.body;
        //userName = req.body.userName;
        //email = req.body.email;
        //password = req.body.password;

        console.log(req.body)
        if (!(userName && password && email)){
           return res.status(400).send("wrong");
        }

        const found = await User.findOne({ email });

        if (found){
            return res.status(400).send("already exists");
        }

        encPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            userName,
            email: email.toLowerCase(),
            password: encPass
        });

        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "3h",
            }
        );

            user.token = token;
            delete user["password"];   /// does not work?
            //console.log(user);
           return res.status(201).json(user);

    } catch (err){
        console.log(err)
    }

});

app.post("/node/login", async (req, res) => {

    try{
        const {email, password} = req.body;

        if (!(email && password)){
           return res.status(400).send("All input is required");
        }

        const user = await User.findOne({email})

        if (user && (await bcrypt.compare(password,user.password))){
            const token = jwt.sign(
                {user_id: user.__id, email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "3h"
                }
            );

            user.token = token;

            return res.status(200).json(user);

        };

       return res.status(400).send("Invalid credentials");

    } catch (err) {
        console.log(err)
    }

});





app.use('/*', express.static('../client/dist/index.html'));
module.exports = app;
