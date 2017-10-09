const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String
    },
    coordinate: [Number]
  }
})

storeSchema.index({location: '2dsphere'})

module.exports = mongoose.model('Store', storeSchema)