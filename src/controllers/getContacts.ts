const Contact = require('../models/Contact')

const getContacts = async (req, res) => {
  try {
    const data = await Contact.find()
    res.status(200).json(data)
  } catch (error) {
    res.json({ error_message: error.message })
  }
}
const getContactDetails = async (req, res) => {
  const userId = req.params.userid
  try {
    const data = await Contact.findOne({ _id: userId }).select(
      ' _id firstName lastName email phoneNo tag'
    )
    res.status(200).json(data)
  } catch (error) {
    res.json({ error_message: error.message })
  }
}

module.exports = { getContacts, getContactDetails }
