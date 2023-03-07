const router = require("express").Router()
const Expenses = require("../../controllers/Expenses/Expenses.controller")

router.post("/", Expenses.insertExpenses)
router.get("/", Expenses.getAllExpense)
router.put("/:id", Expenses.updateExpense)
router.delete("/:id", Expenses.deleteExpense)

module.exports = router;