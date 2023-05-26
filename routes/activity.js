const express =require('express')
const activityController =require('../controller/activity')
const router =express.Router();

router

//// Products
///API ROOT , Base URL, example-GOOGLE.COM/API/V2
///create product //produnct     /// C R U D
 .post('/',activityController.create)
// Read Get /product
  .get('/',activityController.getAll)
///// Read Get /product /:ID
  .get('/:id',activityController.getId)
 //// Update PUT /product /:ID
  .put('/:id',activityController.replace)
 //// Update PATCH /product /:ID
  .patch('/:id', activityController.Update)
 /// Delete DELETE /product /:ID
  .delete('/:id',activityController.deleteP);

  exports.router =router;
