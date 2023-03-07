const router = require('express').Router()
const Contact = require('../../../controllers/projmanClient/Contact/Contact_controller')

router.post("/", Contact.insertContact)
router.delete("/:id", Contact.delete_Contact)
router.get("/", Contact.getAllContact)
router.patch("/:id", Contact.updateContact)



module.exports = router