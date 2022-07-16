const mongoose = require('mongoose')
const DB = 'mongodb+srv://gaurav2612:gaurav2612@cluster0.d1khx.mongodb.net/portfoliowebsitedata?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>console.log("Connection Error"))

