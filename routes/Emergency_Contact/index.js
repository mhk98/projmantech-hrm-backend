const router = require('express').Router()
const Emergency_Contact = require('../../controllers/Emergency_Contact/emergency_contact.controller')

router.post("/", Emergency_Contact.family_information)
router.get("/:id", Emergency_Contact.single_family_information)
router.patch("/:id", Emergency_Contact.family_information_update)
// router.get("/", Add_Employee.getAllEmployee)


module.exports = router;