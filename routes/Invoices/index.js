const router = require("express").Router()
const Invoices = require("../../controllers/Invoices/Invoices.controller")

router.post("/", Invoices.insertInvoices)
router.put("/:id", Invoices.updateInvoices)
router.delete("/:id", Invoices.deleteInvoices)
router.get("/", Invoices.getAllInvoice)
router.get("/Paid", Invoices.getSingleVoice)

module.exports = router;