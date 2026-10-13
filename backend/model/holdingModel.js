const {model} = require('mongoose')

const holdingSchema  =  require('../schema/holdingSchema') 

const Holding = new model("holding" , holdingSchema)

module.exports = {Holding}