const mongoose = require("mongoose")

const schema1=new mongoose.Schema({
    userName:{type:String,require:true},
    password:{type:String,require:true},
    email:{typr:String,require:true}
})

const posts1=mongoose.model("students",schema1)

module.exports=posts1