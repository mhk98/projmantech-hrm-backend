const router = require('express').Router()
const Employee_BankInfo = require('../../controllers/Employee_BankInfo/Employee_BankInfo.controller')

router.get("/:id", Employee_BankInfo.get_single_Bank_Informations)
router.patch("/:id", Employee_BankInfo.update_Employee_Bank_information)



module.exports = router;