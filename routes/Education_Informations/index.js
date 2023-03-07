const router = require('express').Router()
const Education_Information = require('../../controllers/Education_Informations/Education_Informations.controller')

// router.post("/", Education_Information.insert_Educaion_Information)
router.post("/:id", Education_Information.insert_Educaion_Information)
router.get("/:employeeId", Education_Information.get_All_Education_info)
router.patch("/:employeeId/:educationId", Education_Information.update_Education_information)
router.delete("/:employeeId/:educationId", Education_Information.delete_Education_Information)





module.exports = router;