// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Contact'.
const Contact = require('../models/Contact')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'addContact... Remove this comment to see the full error message
const addContacts = async (req: any, res: any) => {
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
