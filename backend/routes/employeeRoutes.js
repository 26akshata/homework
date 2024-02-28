const express = require('express')
const { createEmployee, getEmployee } = require('../controllers/employeeControllers')
const router = express.Router()

router.post('/create-employee',createEmployee)
router.get('/display-employee',getEmployee)

module.exports= router