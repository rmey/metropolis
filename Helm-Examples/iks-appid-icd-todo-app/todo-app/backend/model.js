const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const { Schema } = mongoose;

var todoSchema = new Schema({
  _id: {type: String, default: uuidv1},
  text: String,
  isComplete: Boolean,
});

const Todoitem = mongoose.model('todo', todoSchema);

module.exports = {
  Todoitem
};
