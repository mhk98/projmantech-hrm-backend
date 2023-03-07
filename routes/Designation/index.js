const router = require("express").Router()
const Designation = require("../../controllers/Designation/Designation_controller")

router.post("/", Designation.insertDesignation)
router.get("/", Designation.getAllDesignation)
router.delete("/:id",Designation.delete_Designation)

module.exports = router;