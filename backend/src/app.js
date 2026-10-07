import express from "express"

const app = express()

app.use("/",(req,res)=>{
    res.send("Hello from dashboard")
})

app.use("/test",(req,res)=>{
    res.send("Hello from server")
})

app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})