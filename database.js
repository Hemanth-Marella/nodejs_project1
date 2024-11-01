const mongoose=require("mongoose")

const mongourl="mongodb://localhost:27017/newone"

const connectDB=async()=>{
    try{
        await mongoose.connect(mongourl,{})
        console.log("connect successfully")

    }catch(error){
        console.log("not connected")
    }
}

module.exports={
    connectDB
}