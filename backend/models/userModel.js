const { string, required } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     username: { type: String, required: true, minlength: 3, maxlength: 30 },
     email: { type: String, required: true, minlength: 10, maxlength: 50, unique: true },
     password: { type: String, required: true, minlength: 10, maxlength: 100 },
}, { timestamps: true, })

const userModel = mongoose.model("ChatMe User", userSchema)
module.exports = userModel