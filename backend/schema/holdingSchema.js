const {Schema} = require('mongoose')

  const holdingSchema = new Schema({
    name : { type : String,
         required: true
        },
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String,
})

module.exports = holdingSchema

