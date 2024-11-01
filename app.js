const express=require("express")

const nodemon=require("nodemon")

const app=express()


const port=3000


let student=[
    {name:"hemanth","rollno":592},
    {name:"janu","rollno":55}
]

app.get("",(req,res)=>{
    res.status(200).send(student)
})


app.listen(port,()=>{
    console.log(`http is require ${port}->hhtp://localhost:${port}`)
})