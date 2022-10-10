
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const methodOverride = require("method-override");
const logger = require("morgan");
const dotenv = require('dotenv').config({ path: "./config/.env" });
const PORT = 3000

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'g-i'

    MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

//Using EJS for views
app.set('view engine', 'ejs')
//Static Folder
app.use(express.static('public'))
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
    //, { info: data }
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

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})