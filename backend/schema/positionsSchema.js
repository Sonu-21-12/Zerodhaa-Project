const {Schema} = require('mongoose')

  const postionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg:Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})

module.exports = postionSchema

