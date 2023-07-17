const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threebythreeSchema = new Schema({
  items: [{
    title: String, 
    image: String
  }],
  rating: [{
    rating: String,
    user: String
  }],
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('ThreeByThree', threebythreeSchema);