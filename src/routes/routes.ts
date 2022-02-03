const express = require('express')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'getContact... Remove this comment to see the full error message
const { getContacts, getContactDetails } = require('../controllers/getContacts')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'addContact... Remove this comment to see the full error message
const { addContacts } = require('../controllers/addContact')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'deleteCont... Remove this comment to see the full error message
const deleteContact = require('../controllers/deleteContact')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'updateCont... Remove this comment to see the full error message
const updateContact = require('../controllers/editContact')
const router = express.Router()

router.route('/contacts').get(getContacts)
router.route('/get-contact-details/:userid').get(getContactDetails)
router.route('/add-contact').post(addContacts)
router.route('/delete-contact').post(deleteContact)
router.route('/update-contact').post(updateContact)

module.exports = router
