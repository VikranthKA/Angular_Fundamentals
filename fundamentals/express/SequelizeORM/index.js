require("dotenv").config({path:`${process.cwd()}/.env`})
const express = require('express')
const authRouter = require('./app/routes/authRoute')
const catchAsync = require("../utils/cancelAsync")
const AppError = require("../utils/appError")
const globalErrorHandler = require("./app/controller/errorController")

const app = express()
app.use(express.json())

const PORT = process.env.APP_PORT || 3333

//Routes
app.use("/api/v1/auth",authRouter)

//Not found
app.use('*',catchAsync(async(req,res,next)=>{
    throw new AppError(`Can't find ${req.originalUrl} on this server`,404)
}))

//Error Handling
app.use(globalErrorHandler)

//Server On!
app.listen(PORT,()=>console.log(`Running on Port ${PORT}`))