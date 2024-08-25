const express = require("express")
const cors = require("cors")
const mongooge = require("mongoose")
const userModel = require("./models/UserModel")
const app = express()

mongooge.connect("mongodb://localhost:27017/crud")

app.use(cors())
app.use(express.json())

app.listen(3001,()=>{
    console.log("server is running")
})


app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then(users =>console.log(res.json(users)))
    .catch(errors => res.json(errors))
})


app.get("/",(req,res)=>{
    userModel.find({})
    .then(user => res.json(user))
    .catch(err => console.log(err) )
})

app.get("/getUser/:id",(req,res)=>{
    userModel.findById({_id:req.params.id})
    .then(user=> res.json(user))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id",(req,res)=>{
     userModel.findByIdAndUpdate({_id:req.params.id},{name:req.body.name,email:req.body.email,age:req.body.age})
     .then(user=> res.json(user))
     .catch(err => res.json(err))
})

app.delete("/deleteUser/:id",(req,res)=>{
    userModel.findByIdAndDelete({_id:req.params.id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})