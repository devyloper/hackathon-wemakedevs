const express = require('express')
const app = express();
const path = require('path')
const staticPath = path.join(__dirname,"../")
const mongoose = require('mongoose')
const DB = 'mongodb+srv://hackathon-wemakedevs:hackathon-wemakedevs@cluster0.m1h3lbp.mongodb.net/test'
const username = 'hackathon-wemakedevs'

app.use(express.json())
mongoose.connect(DB,{
    dbName:'wemakedevs'
}).then(()=>{
    console.log('connection successful')
}).catch(err=>console.log(err))


const mySchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const Model = new mongoose.model('myschema',mySchema)

app.use(express.static(staticPath))
app.get('/',(req,res)=>{
    res.send('/index.html')
})
app.get('/signUp',(req,res)=>{
    res.send('/signUp')
})
app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    const register = new Model({
        username:username,
        password:password
    })    
    const signup = await register.save()
})



app.listen(8000,()=>console.log("listening to the port"))