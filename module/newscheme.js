const { mongoose } = require("mongoose");


const Schema=new mongoose.Schema({

    name:{type:String,require:true},
    age:{type:String,require:true},
    rollno:{type:String,require:true},
    mobieno:{type:Number,require:true},
    grade:{type:String,require:true}

})

const post=mongoose.model("students_information",Schema)

module.exports={
    post
}