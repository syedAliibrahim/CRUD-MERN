const jwt =require('jsonwebtoken')
const userModel = require('../model/users');
const fs = require('fs');
const path = require('path')
const bcrypt =require('bcrypt');
const UserModel = require('../model/users');
const privateKey = "sdasdasdasdkasjdoasd55457897adsasfdsfsdf"
// create user
exports.signup= (req,res)=>{
  console.log(privateKey)
    console.log(req.body);
    const user = new userModel(req.body);
    var token = jwt.sign({ email: req.body.email },privateKey);

     user.token = token;
     user.password= req.body.password;

   user.save().then(savedDoc =>{
      res.status(201).json(savedDoc);
      console.log(savedDoc)
   }).catch(err=>{
    res.status(201).json(err);
   })
 };


 exports.login = async (req, res) => {
   try {
    const doc = await UserModel.findOne({ email: req.body.email,password:req.body.password });
    
    if(doc){
        res.send({
          status:true,
          token: doc.token,
          message:"Login SuccessFully"
        })      
    }
    else{
      res.send({
        status:false,
        message:"Email or Password Is Invalid"})
    }
   }
   catch(err){
    res.send({
      message:err.message

    })
   }
 };