const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require("email-validator");

const UserSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) { return validator.validate(v) },
      message: props =>  `${props.value} is not a valid email.`
    }
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) return next()

  try {
    const hash = await bcrypt.hash(user.password, 12);
    user.password = hash
    next()
  } catch (error) {
    next(error)
  }
})

UserSchema.methods.comparePassword = async function (password) {
  const user = this

  const result = await bcrypt.compare(password, user.password)

  return result
}

module.exports = mongoose.model('User', UserSchema)