const {Router}=require("express")
const studentRoute=Router()
studentRoute.post("/addStudent",(req,res)=>{
    console.log("add the student through body")
    const roll=Math.floor(Math.random()*100)
    req.body.roll=roll
    console.log(req.body)
    res.send("added student")
  })
  module.exports={studentRoute}