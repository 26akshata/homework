const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("registration",registrationSchema)