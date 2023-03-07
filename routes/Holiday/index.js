const router = require("express").Router()
const Holiday = require("../../controllers/Holiday/Holiday_controller")

router.post("/", Holiday.insertHoliday)
router.get("/", Holiday.getAllHoliday)
router.delete("/:id",Holiday.delete_Holiday)

module.exports = router;