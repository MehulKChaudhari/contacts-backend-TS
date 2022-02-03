// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Contact'.
const Contact = require('../models/Contact')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'deleteCont... Remove this comment to see the full error message
const deleteContact = async (req: any, res: any) => {
  const { userId } = req.body
  try {
    const deletedContact = await Contact.deleteOne({ _id: userId })
    res.status(200).json({
      msg: `Contact deleted successfully`,
      contact: {
        deletedContact,
      },
    })
  } catch (error) {
    res
      .status(500)
      .json({ error_message: error.message, code: 'INTERNAL_ERROR' })
  }
}

module.exports = deleteContact
