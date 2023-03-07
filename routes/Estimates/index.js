const router = require("express").Router()
const Estimates = require("../../controllers/Estimates/Estimates.controller")

router.post("/", Estimates.insertEstimates)
router.put("/:id", Estimates.updateEstimates)
router.delete("/:id", Estimates.deleteEstimates)
router.get("/", Estimates.getAllEstimates)

module.exports = router;