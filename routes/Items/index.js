const router = require("express").Router()
const Items = require("../../controllers/Items/Items.controller")

router.post("/", Items.insertItems)
router.post("/invoice", Items.insertInvoiceItems)
router.get("/:id", Items.getAllItems)

module.exports = router;