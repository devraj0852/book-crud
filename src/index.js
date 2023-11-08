const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('../src/routes')


const app = express();
const port = 7000
app.use(bodyParser.json());
app.use('/',routes)

const mongoDb = "mongodb+srv://devraz0852:klhbTRp2iz3f0JUW@cluster0.lbscbk2.mongodb.net/book-crud?retryWrites=true&w=majority"

mongoose.connect(mongoDb, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(success =>{
    console.log("Successfully connected to mongoDb");
    app.listen(port, () =>{
        console.log("server is running", port);
    })
}).catch(error =>{
    console.log("err in Db connection",error);
})