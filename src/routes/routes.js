const express = require('express')
const { getContacts, getContactDetails } = require('../controllers/getContacts')
const { addContacts } = require('../controllers/addContact')
const deleteContact = require('../controllers/deleteContact')
const updateContact = require('../controllers/editContact')
const router = express.Router()

router.route('/contacts').get(getContacts)
router.route('/get-contact-details/:userid').get(getContactDetails)
router.route('/add-contact').post(addContacts)
router.route('/delete-contact').post(deleteContact)
router.route('/update-contact').post(updateContact)

module.exports = router
