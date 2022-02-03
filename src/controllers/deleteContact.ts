const Contact = require('../models/Contact')

const deleteContact = async (req, res) => {
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
