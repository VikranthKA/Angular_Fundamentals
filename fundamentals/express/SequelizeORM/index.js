require("dotenv").config({path:`${process.cwd()}/.env`})
const express = require('express')
const authRouter = require('./app/routes/authRoute')

const app = express()
app.use(express.json())

const PORT = process.env.APP_PORT || 3333

app.get('/',(req,res)=>{
    res.send("Working")
})

//Routes
app.use("/api/v1/auth",authRouter)


//Not found
app.use('*',(req,res,next)=>{
    res.status(404).json({
        message:"api not found"
    })
})

app.listen(PORT,()=>console.log(`Running on Port ${PORT}`))