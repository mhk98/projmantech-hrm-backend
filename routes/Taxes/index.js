const router = require("express").Router()
const Taxes = require("../../controllers/Taxes/Taxes.controller")

router.post("/", Taxes.insertTaxes)
router.get("/", Taxes.getAllTaxes)
router.delete("/:id", Taxes.deleteTaxes)

module.exports = router;