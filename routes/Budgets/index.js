const router = require("express").Router()
const Budgets = require("../../controllers/Budgets/Budgets.controller")

router.post("/", Budgets.insertBudgets)
router.get("/", Budgets.getAllBudgets)
router.delete("/:id", Budgets.delete_Budget)

module.exports = router;