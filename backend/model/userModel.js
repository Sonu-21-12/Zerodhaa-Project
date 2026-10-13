const userSchema = require('../schema/userSchema')
const {model}  = require('mongoose')

const User = new model("user" , userSchema)


module.exports = User