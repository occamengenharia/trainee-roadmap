const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  organizador_id: {
    type: String,
  },
  nome: {
    type: String,
  },
  data: {
    type: String,
  },
  local: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model('Event', EventSchema);