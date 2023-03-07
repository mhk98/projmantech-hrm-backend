const router = require('express').Router()
const Personal_Information = require('../../controllers/Personal_Information/Personal_Information.controller')

// router.post("/", Personal_Information.personal_information)
router.get("/:id", Personal_Information.single_personal_information)
router.patch("/:id", Personal_Information.personal_information_update)
// router.get("/", Add_Employee.getAllEmployee)


module.exports = router;