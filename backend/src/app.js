import express from "express"

const app = express()


app.get("/test",(req,res,next)=>{
    console.log("first route")
    next()
    console.log("after next")
    res.send("Hello from server response")
    
},
(req,res,next)=>{
     console.log("second route")
    //res.send("Hello from server response1")
    next()
},
(req,res)=>{
     console.log("Third route")
    res.send("Hello from server response2")
},

) 


app.get("/test/app",(req,res)=>{
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