const express = require('express')
require('./db/conn')
const app = express()
const User = require("./models/usermessage")
const port = process.env.PORT || 3000
const path = require('path')
const hbs = require('hbs')
const mongoose = require('mongoose')



const staticpath = path.join(__dirname,"../public")
const partialpath = path.join(__dirname,"../templates/partials")
const templatepath = path.join(__dirname,"../templates/views")

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs")
app.set("views",templatepath)
hbs.registerPartials(partialpath)

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/contact",async(req,res)=>{
    try{
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render("index")
    }catch(error){
        res.status(500).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is Running at port no ${port}`)
})