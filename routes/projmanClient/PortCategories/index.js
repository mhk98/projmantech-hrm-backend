const router = require("express").Router()
const PortCategories = require("../../../controllers/projmanClient/PortCategories/PortCategories_controller")

router.post("/", PortCategories.insertPortCategories)
router.get("/", PortCategories.getAllPortCategories)
router.delete("/:id", PortCategories.delete_PortCategories)

module.exports = router;