const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: true,
      trim: true,
    },
    lastName: {
      type: String,
      // required: true,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      lowercase: true,
    },
    phoneNo: {
      type: Number,
    },
    tag: {
      type: String,
      default: 'Other',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Contact', ContactSchema)
