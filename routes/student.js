var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var studentModel = require('../models/student');



/*1. GET home page. */

router.get('/', (req, res) => {

  res.send('student routes works');

});

//------------------------------------------CREATE-OPERATION----------------------------------------------------


/* 2. POST Method to push the student details. */

router.post('/add', (req, res ,next ) => {

    // ----------------this is static body----------------------

    // let newStudent =  new studentModel({

    //       studentId: 101,
    //       firstName: 'Manish',
    //       lastName:'Giri',
    //       age: 23,
    //       dob:'12-12-2020',
    //       department:'Blockchain'
        
    // })


    // ----------------------making it dynamic body---------------------------

    let newStudent =  new studentModel({

        
          firstName: req.body.firstName,
          lastName:req.body.lastName,
          age: req.body.age,
          dob: req.body.dob,
          department:req.body.department
        
    })
    newStudent.save((err, newStudent)=>{
        if(err) {
            res.send('error occured ');
        }
        else {
            res.json({
                status: 200,
                msg:'Student has been added Successfully',
                studentObj:newStudent
            });
        }
    });

 

});

//----------------------------------READ-OPERATION------------------------------------------------


/* 3. GET Method to list students details */

router.get('/lists', (req, res ,next ) => {


  
    studentModel.find((err, response)=>{
        if(err) {
            res.send('error occured ');
        }
        else {
            res.send({
                status: 200,
                resultFound:response.length,
                student:response
            });
        }
    });

 

});



/* 4. GET Method to list of student by specific firstName */

router.get('/searchByfirstName', (req, res ,next ) => {


    const firstNameQuery= req.query.firstName;
  
      studentModel.find({firstName:firstNameQuery},(err, response)=>{
  
          if(err) {
              res.send('error occured ');
          }
          else {
              res.send({
                  status: 200,
                  resultFound:response.length,
                  students:response
              });
          }
      });
  
  
  });


/* 5. GET Method to list of student by specific id */

router.get('/searchByID', (req, res ,next ) => {


    const idQuery= req.query.id;
  
      studentModel.findById(idQuery,(err, response)=>{
  
          if(err) {
              res.send('error occured ');
          }
          else {
              res.send({
                  status: 200,
                  students:response
              });
          }
      });
  
  
  });

//----------------------------------UPDATE-OPERATION----------------------------------------------


/* 6. PUT Method to update the list of student by  */

router.put('/update', (req, res ,next ) => {


    const department= req.query.department;
  
      studentModel.update({age:24 , dob:'12-march-2020'},{department: department},(err, response)=>{
  
          if(err) {
              res.send('error occured ');
          }
          else {
              res.send({
                  status: 200,
                  students:response
              });
          }
      });
  
  
  });

  /* 7. PUT Method to update the list of student by id and fname */

router.put('/updateUser', (req, res ,next ) => {

    const id = req.query.userId;
    const fName= req.query.firstName;
  
      studentModel.findByIdAndUpdate(id,{firstName:fName},(err, response)=>{
  
          if(err) {
              res.send('error occured ');
          }
          else {
              res.send({
                  status: 200,
                  students:response
              });
          }
      });
  
  
  });

   /*8.  PUT Method to findOne&Update */

router.put('/updateUser1', (req, res ,next ) => {

    const id = req.query.userId;
    const fName= req.query.firstName;
  
      studentModel.findOneAndUpdate(id,{firstName:fName},(err, response)=>{
  
          if(err) {
              res.send('error occured ');
          }
          else {
              res.send({
                  status: 200,
                  students:response
              });
          }
      });
  
  
  });


module.exports = router;
