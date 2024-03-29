const mongoose = require('mongoose');
const userCollection = 'users';

const roles = ['admin', 'user'];

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'carts',
  },
  role: {
    type: String,
    enum: roles,
    required: true,
    default: 'user',
  },
});

const userModel = mongoose.model(userCollection, userSchema);
module.exports = userModel;