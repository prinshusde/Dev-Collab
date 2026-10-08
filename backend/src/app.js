import express from "express"

const app = express()


app.use("/test",(req,res)=>{
    res.send("Hello from server")
}) 


app.use("/test/app",(req,res)=>{
    res.send("Hello from server1")
})

app.use("/test/:testId/app",(req,res)=>{
    console.log(req)
    res.send("Hello from server21 app")
})

app.use("/test/:testId",(req,res)=>{
    res.send("Hello from server21")
})





app.use("/",(req,res)=>{
    res.send("Hello from dashboard")
})



app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})