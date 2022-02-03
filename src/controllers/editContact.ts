const Contact = require('../models/Contact')

const updateContact = async (req, res) => {
  const { userId, firstName, lastName, email, phoneNo, tag } = req.body
  const contactValuesInDB = await Contact.find({ _id: userId })
  console.log(contactValuesInDB)
  try {
    const oldValues = contactValuesInDB
    const newValues = {
      $set: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
        tag: tag,
      },
    }
    const updatedData = await Contact.updateOne(oldValues, newValues)
    res.status(200).json({
      msg: `Contact updated successfully`,
      contact: {
        updatedData,
      },
    })
  } catch (error) {
    res
      .status(500)
      .json({ error_message: error.message, code: 'INTERNAL_ERROR' })
  }
}

module.exports = updateContact
