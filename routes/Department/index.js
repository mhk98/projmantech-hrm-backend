const router = require("express").Router()
const Department = require("../../controllers/Department/Department_controller")

router.post("/", Department.insertDepartment)
router.get("/", Department.getAllDepartment)
router.delete("/:id",Department.delete_Department)

module.exports = router;