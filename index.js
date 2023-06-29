const express=require("express")
const fs=require("fs")
const {studentRoll}=require("./middleware/studentRoll.middleware")
const{timeLogger}=require("./middleware/timeLogger.middleware")
const {studentRoute}=require("./routes/studentRoute")
// I would like to find start time and end time of req and res using middleware
const app=express()
app.use(express.json())
app.use("/student",studentRoute)
//Now lets add roll number as id for a student using middleware whenever we generate details
app.use(studentRoll)
app.get("/",(req,res)=>{
    console.log("Home page")
   const data=fs.readFileSync("./db.json","utf-8")
   res.send(data)
})
app.get("/about",(req,res)=>{
   res.send("About page")
})

app.listen(4500,()=>{
    console.log("server running")
})