const express =require('express')
const userController =require('../controller/user')
const router =express.Router();

router

//// Products
///API ROOT , Base URL, example-GOOGLE.COM/API/V2
///create product //produnct     /// C R U D
//  .post('/',userController.create)
// Read Get /product
  .get('/',userController.getAll)
///// Read Get /product /:ID
  .get('/:id',userController.getId)
 //// Update PUT /product /:ID
  .put('/:id',userController.replace)
 //// Update PATCH /product /:ID
  .patch('/:id', userController.Update)
 /// Delete DELETE /product /:ID
  .delete('/:id',userController.deleteP);

  exports.router =router;