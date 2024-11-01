
const post=require("..//module/newscheme.js")


const get=async(req,res)=>{
    try{
        const getall=await post.find()
        res.status(200).send(getall)
    }
    catch(error){
        res.status(400).send(error)

    }
}

const createstudents=async(req,res)=>{
    let body=req.body
    const newone = new post({
        name:body.name,
        age:body.age,
        rollno:body.rollno,
        mobieno:body.mobileno,
        grade:body.grade
    });
    try{
        await newone.save()
        res.status(201).json({
            name:body.name,
            age:body.age,
            rollno:body.rollno,
            mobieno:body.mobileno,
            grade:body.grade
    })
    }catch(error){
        res.status(400).json({message:error.message})
    }
}


module.exports={
    get,
    createstudents
}
    