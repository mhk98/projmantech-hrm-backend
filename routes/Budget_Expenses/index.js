const router = require("express").Router()
const Budget_Expenses = require("../../controllers/Budget_Expenses/Budget_Expenses.controller")

router.post("/", Budget_Expenses.insert_Budgets_Expenses)
router.get("/", Budget_Expenses.get_AllBudget_Expenses)
router.delete("/:id", Budget_Expenses.delete_Budget_Expense)

module.exports = router;