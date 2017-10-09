const mongoose = require('mongoose')

const Schema = mongoose.Schema

const giftSchema = new Schema({
  id: Number,
  name:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    reuquired: true
  },
  imgPath: {
    type: String,
    required: true
  },


})

const Gift = mongoose.model('Gift', giftSchema)
module.exports = Gift