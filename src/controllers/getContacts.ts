// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Contact'.
const Contact = require('../models/Contact')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'getContact... Remove this comment to see the full error message
const getContacts = async (req: any, res: any) => {
  try {
    const data = await Contact.find()
    res.status(200).json(data)
  } catch (error) {
    res.json({ error_message: error.message })
  }
}
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'getContact... Remove this comment to see the full error message
const getContactDetails = async (req: any, res: any) => {
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
