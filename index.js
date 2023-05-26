const express =require('express');
const cors = require('cors');
const server =express();
const activityRouter=require('./routes/activity')
const userRouter=require('./routes/user');
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const jwt =require('jsonwebtoken')
const dotenv= require('dotenv')
const authRouter = require('./routes/auth')
const fs = require('fs');
const path = require('path')
const privateKey = "sdasdasdasdkasjdoasd55457897adsasfdsfsdf"



const DBURI =
"mongodb+srv://contour:aliibrahim@cluster0.4hxwa4n.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DBURI)
  .then((res)=>console.log("mongodb connect"))
  .catch((err)=> console.log("DB Error",err));
//aliibrahim-- admin p
//123456 --Db p



///body Parser 

const auth = (req,res,next)=>{
   try{
    const token = req.get('Authorization').split('Bearer ')[1];
    console.log(token);
    var decoded = jwt.verify(token, privateKey);
    if(decoded.email){
      next()
    }else{
     res.sendStatus(401)
    }
    }catch(err){
     res.sendStatus(401).json({error: "error cant get"})
   }
   console.log(decoded)
}
dotenv.config();
server.use(cors());
server.use(express.json());
server.use(express.static('public'))
server.use('/auth',authRouter.router)
server.use('/activity',auth,activityRouter.router);
server.use('/users',auth,userRouter.router);


server.listen(8080,()=>{
    console.log('server started')
})