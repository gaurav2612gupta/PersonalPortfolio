const mongoose = require('mongoose')
const DB = 'mongodb+srv://gaurav1122gupta:LjX4HzDAxeJzt4m4@cluster0.r75msnd.mongodb.net/';

mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>console.log("Connection Error"))

