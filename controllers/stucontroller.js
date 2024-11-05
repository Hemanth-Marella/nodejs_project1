
const bcrypt=require("bcrypt");
const posts1 = require("../module/studentposts.js");

const get= async(req,res)  =>{
    try{
        const posts = await posts1.findOne()
        res.status(200).send(posts) 
    }catch(error){
        res.status(400).send({message:error.message})
    }

}


const signup = async(req,res)=>{
    let body = req.body;
    let passwordhash=await bcrypt.hash(body.password,2)
    const student = new posts1({
        userName:body.userName,
        email:body.email,
        password:passwordhash
    })
   try{
        await student.save();
        res.send(200).json({
            userName:body.userName,
            email:body.email
        })

   }
   catch(error){
    console.log({message:error.message})
   }

    

}