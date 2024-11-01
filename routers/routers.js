const express=require("express");

const { get,createstudents} = require("../controllers/getpostdel.js");

const router=express.Router();

router.get("",get)
router.post("",createstudents)

module.exports={
    router
}