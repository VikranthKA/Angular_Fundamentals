const express =  require("express")
const studentRoutes = require("./src/students/routes")
const app = express()

const port = 3333

app.get("/",(req,res)=>{
    res.send("I am Home")
})

app.use(express.json());

app.use('/api/v1/students',studentRoutes)

// console.log(studentRoutes,"s")

app.listen(port,()=>console.log(`Listing on the ${port}`))