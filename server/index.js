const express = require('express')
const app = express();
const path = require('path')
const staticPath = path.join(__dirname,"../")
const mongoose = require('mongoose')
const DB = 'mongodb+srv://hackathon-wemakedevs:hackathon-wemakedevs@cluster0.m1h3lbp.mongodb.net/test'
const username = 'hackathon-wemakedevs'
mongoose.connect(DB,{
    dbName:'wemakedevs'
}).then(()=>{
    console.log('connection successful')
}).catch(err=>console.log(err))



app.use(express.static(staticPath))
app.get('/',(req,res)=>{
    res.send('/index.html')
})
app.post('/register',(req,res)=>{
    const {username,email,password,cpassword} = req.body;
})




app.listen(8000,()=>console.log("listening to the port"))