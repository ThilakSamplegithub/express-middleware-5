const express=require("express")
const fs=require("fs")
const{timeLogger}=require("./middleware/timeLogger.middleware")
// I would like to find start time and end time of req and res using middleware
const app=express()
app.use(express.json())
app.use(timeLogger)
//Now lets add roll number as id for a student using middleware whenever we generate details
app.use(studentRoll)
app.post("/addStudent",(req,res)=>{
  console.log("add the student through body")
  const roll=Math.floor(Math.random()*100)
  req.body.roll=roll
  console.log(req.body)
  res.send("added student")
})
app.get("/",(req,res)=>{
    console.log("Home page")
   const data=fs.readFileSync("./db.json","utf-8")
   res.send(data)
})
app.get("/about",(req,res)=>{
   res.send("About page")
})
function studentRoll(req,res,next){
  console.log("student roll number will be added")
next()
}
app.listen(4500,()=>{
    console.log("server running")
})