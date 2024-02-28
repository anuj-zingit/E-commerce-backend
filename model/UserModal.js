const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true,trim:true,min:5,max:20},
  //trim:-space remove automate
  lastName: { type: String, required: true },
  userName: { type: String, required: true,index:true,lowercase:true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
  phone: { type: Number, required: true },
  otpToken: { type: String }
})

//modal
const User = mongoose.model('User', userSchema);

module.exports = User;