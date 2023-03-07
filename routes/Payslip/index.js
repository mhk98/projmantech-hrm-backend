const router = require('express').Router();
const Payslip = require("../../controllers/Payslip/Payslip.controller");
//for creaing route to create payslip
router.post("/createPayslip",Payslip.createPayslip);

//for getting invidual payslip
router.get("/getPayslip",Payslip.getPayslipInvidual);


//for payslip report
router.get("/allPayslip",Payslip.allPayslip);


module.exports = router;