const Employee = require('../models/employee')

exports.createEmployee = (req,res) =>{
    console.log(req.body)
    let newEmployee =new Employee(req.body)
    newEmployee.save().then(response => {
        res.send({
            success : true,
            response
        })
    }).catch(err => {
        res.send({
            success : false,
            err
        })
    })
}

exports.getEmployee =(req,res) => {
    Employee.find().then(response =>{
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
        success:false,
        err
        })
    })
}

