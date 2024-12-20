const express=require("express")

const nodemon=require("nodemon")
const { connectDB } = require("./database")
const morgan = require("morgan")
const { router } = require("./routers/routers")

const app=express()


const port=3001

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/posts",router)

connectDB()





app.listen(port,()=>{
    console.log(`server is running on${port}-> http://localhost:${port}`)
})