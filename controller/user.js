const fs =require('fs')
// const index =fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products =data.products;
const userModel = require('../model/users')
const mongoose = require("mongoose");
const jwt =require('jsonwebtoken')


// create user

exports.create= (req,res)=>{
    console.log(req.body);

    const user= new userModel(req.body);

    var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
    user.token = token
   //  var token = jwt.sign({ email: req.body.email },'shhhhh');
   //  user.token =token;
   // console.log(user)
   // product.title ='phoneX';
   // product.price ='phoneX';
   user.save().then(savedDoc =>{
      res.status(201).json(savedDoc);
      console.log(savedDoc)
   })
   
   // product.save((err,doc)=>{
   //    console.log({err,doc})
   //    res.status(201).json(doc);
   // })
 };


 exports.getAll= async (req,res)=>{
   const activity = await userModel.find();
   //{price:{$gt:500}}
    res.json(activity);
 };
 exports.getId = async(req,res)=>{
    // console.log(req.params)
    const id= req.params.id;
    console.log({id})
   //  const product =products.find(p=>p.id===id)
   const activity =await userModel.findById(id)
    res.json(activity);
 }
 exports.replace = async(req,res)=>{
    // console.log(req.params)
    //  const productIndex =products.findIndex(p=>p.id===id)
    //  products.splice(productIndex,1,{...req.body, id:id})
    const id=  req.params.id;
   try{
    const doc = await userModel.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }
 exports.Update = async(req,res)=>{
    // console.log(req.params)
   //  const id= +req.params.id;
   //  const productIndex =products.findIndex(p=>p.id===id)
   //  const product =products[productIndex];
   //  products.splice(productIndex,1,{...product,...req.body,})
   //  res.status(201).json();
   const id=  req.params.id;
   try{
    const doc = await userModel.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }
 exports.deleteP = async (req,res)=>{
    // console.log(req.params)
   //  const id= +req.params.id;
   //  const productIndex =products.findIndex(p=>p.id===id)
   //  const product =products[productIndex];
   //  products.splice(productIndex,1)
   //  res.status(201).json(product);
   const id=  req.params.id;
   try{
    const doc = await userModel.findOneAndDelete({_id:id})
    res.status(201).json(doc);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }



// const fs =require('fs')
// // const index =fs.readFileSync('index.html','utf-8');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const users =data.users;

// exports.create= (req,res)=>{
//     console.log(req.body);
//     users.push(req.body);
//     res.json(req.body)
//  }
//  exports.getAll= (req,res)=>{
//     res.json(users)
//  }
//  exports.getId =(req,res)=>{
//     // console.log(req.params)
//     const id= +req.params.id;
//     const user =users.find(p=>p.id===id)
//     res.json(user)
//  }
//  exports.replace =(req,res)=>{
//     // console.log(req.params)
//     const id= +req.params.id;
//     const userIndex =users.findIndex(p=>p.id===id)
//     users.splice(userIndex,1,{...req.body, id:id})
//     res.status(201).json();
//  }
//  exports.Update = (req,res)=>{
//     // console.log(req.params)
//     const id= +req.params.id;
//     const userIndex =users.findIndex(p=>p.id===id)
//     const user =users[userIndex];
//     users.splice(userIndex,1,{...user,...req.body,})
//     res.status(201).json();
//  }
//  exports.deleteP = (req,res)=>{
//     // console.log(req.params)
//     const id= +req.params.id;
//     const userIndex =users.findIndex(p=>p.id===id)
//     const user =users[userIndex];
//     users.splice(userIndex,1)
//     res.status(201).json(user);
//  }