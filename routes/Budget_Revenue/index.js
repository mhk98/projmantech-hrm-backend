const router = require("express").Router()
const Budget_Revenue = require("../../controllers/Budget_Revenue/Budget_Revenue.controller")

router.post("/", Budget_Revenue.insert_Budget_Revenue)
router.get("/", Budget_Revenue.get_AllBudget_Revenue)
router.delete("/:id", Budget_Revenue.delete_Budget_Revenue)

module.exports = router;