// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Contact'.
const Contact = require('../models/Contact')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'updateCont... Remove this comment to see the full error message
const updateContact = async (req: any, res: any) => {
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
