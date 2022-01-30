const Contact = require('../models/Contact')

const addContacts = async (req, res) => {
  const { firstName, lastName, email, phoneNo, tag } = req.body
  try {
    const contact = new Contact({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      tag: tag,
    })
    await contact.save()
    return res.status(200).json({
      msg: `Contact saved successfully`,
      contact: {
        email: contact.email,
        firstName: contact.firstName,
        lastName: contact.lastName,
        tag:contact.tag,
        userId: contact._id,
      },
    })
  } catch (error) {
    res
      .status(500)
      .json({ error_message: error.message, code: 'INTERNAL_ERROR' })
  }
}

module.exports = { addContacts }
