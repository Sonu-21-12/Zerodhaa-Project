const {model} = require('mongoose')

const orderSchema  =  require('../schema/orderSchema') 

const Order = new model("order" , orderSchema)

module.exports = {Order}