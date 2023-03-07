const router = require('express').Router()
const Payment = require('../../controllers/Payment/Payment_controller')

//router.post("/", Payment.insertPayment)
router.delete("/:id", Payment.delete_Payment)
router.get("/", Payment.getAllPayment)
router.get("/:id", Payment.getPayment)
router.put("/:id", Payment.update_Payment)



module.exports = router