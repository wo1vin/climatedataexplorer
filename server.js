const path = require('path');
const dotenv = require('dotenv').config({ path: "./config/.env" });

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const logger = require("morgan");
// const mainRoutes = require("./routes/main");
// const postRoutes = require("./routes/posts");
// const commentRoutes = require("./routes/comments");
// const PORT = 3000

//Using EJS for views
app.set('view engine', 'ejs')
//Static Folder
app.use(express.static('public'))
app.use('/static', express.static('public'))
//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//Logging
app.use(logger("dev"));
//Use forms for put / delete
app.use(methodOverride("_method"));

//Setup Routes For Which The Server Is Listening
// app.use("/", mainRoutes);
// app.use("/data", postRoutes);
// app.use("/post", commentRoutes);

app.get('/',(req, res)=>{
    res.render('index.ejs'
    // , { info: data }
    )
    // .catch(error => console.error(error))
})

app.get('/data',(req, res)=>{
//     db.collection('data').find().toArray()
//     .then(data => {
        res.render('data.ejs'
        //, { info: data }) }
        )
//     .catch(error => console.error(error))
})

app.get('/add-data',(req, res)=>{
    res.render('add-data.ejs')
})

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'g-i'

    MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


app.listen(process.env.PORT || dotenv.PORT , ()=>{
    console.log(`Server running on port ${dotenv.PORT}`)
})