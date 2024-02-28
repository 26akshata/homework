const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    desi:{
        type:String,
        required:true
    },
    sal:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("employee",employeeSchema)