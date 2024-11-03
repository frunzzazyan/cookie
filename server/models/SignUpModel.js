const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const SignUpSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : 18,
        max : 100
    },
    password : {
        type : String,
        required : true
    }
})

SignUpSchema.pre("save",async function(){
    console.log(this)
    const hashPassword = await bcrypt.hash(this.password, 10)
    this.password = hashPassword
})

module.exports = mongoose.model("users", SignUpSchema)