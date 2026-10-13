const {model} = require('mongoose')

const postionsSchema  =  require('../schema/positionsSchema') 

const Positions = new model("postion" , postionsSchema)

module.exports = {Positions}