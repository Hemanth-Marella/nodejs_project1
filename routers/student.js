const express=require("express");

const {get,signup} = require("../controllers/stucontroller.js");


const router1 = express.Router();

router1.get("",get)
router1.post("",signup)

module.exports=routers