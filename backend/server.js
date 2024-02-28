// Import the Express module
const express = require('express');

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// Create an Express application
const app = express();

const employeeRouter = require('./routes/employeeRoutes')

mongoose.set('strictQuery',false)

mongoose.connect('mongodb://localhost:27017/homework')
.then(() => console.log('database connected')).catch(error => console.log(error)) 

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/api',employeeRouter)
// Set up the server to listen on a port
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});