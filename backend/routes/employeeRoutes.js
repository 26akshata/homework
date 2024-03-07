const express = require('express')
const { createEmployee, getEmployee,updateEmployee, searchEmployee, getEmployeeByLetter, login, registration } = require('../controllers/employeeControllers')
const router = express.Router()

router.post('/create-employee',createEmployee)
router.get('/display-employee',getEmployee)
router.put('/update-employee/:fname',updateEmployee)
router.get('/search-employee/:fname',searchEmployee)
router.get('/get-employee-by-letter/:letter',getEmployeeByLetter)
router.post('/registration-employee',registration)

module.exports= router