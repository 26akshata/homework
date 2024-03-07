const Employee = require('../models/employee')
const registration = require('../models/registration')

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

exports.updateEmployee = (req,res) => {
    console.log(req.body)
    Employee.findOneAndUpdate({fname:req.params.fname},req.body,{new:true}).then(response => {
        console.log(response)
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

exports.searchEmployee =(req,res) =>{
    Employee.findOne({fname:req.params.fname}).then(response => {
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


exports.getEmployeeByLetter =(req, res) =>{
    const {letter} = req.params;

    const query = { fname: { $regex: `${letter}`, $options: 'i'}};
    console.log(query)
    Employee.find(query)
    .then(items => {
        console.log(items)
        res.status(200).json({
            success:true,
            items
        });
      })
      .catch(error => {
        res.status(500).json({ message: "Error fetching items", error: error });
      });
}

exports.registration = (req,res) =>{
    console.log(req.body)
    let newRegistration =new registration(req.body)
    newRegistration.save().then(response => {
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





























