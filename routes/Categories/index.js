const router = require("express").Router()
const Categories = require("../../controllers/Categories/Categories.controller")

router.post("/", Categories.insertCategories)
router.get("/", Categories.getAllCategories)
router.delete("/:id", Categories.delete_Categories)

module.exports = router;