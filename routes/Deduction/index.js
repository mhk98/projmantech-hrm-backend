const router = require('express').Router();
const Deduction = require("../../controllers/Deduction/Deduction.controller");



router.post("/createDeduction", Deduction.createDeduction);
//for getting invidual deduction by employee id
router.get("/", Deduction.getDeductionInvidual);





module.exports = router;