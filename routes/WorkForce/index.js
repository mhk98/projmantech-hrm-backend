const router = require("express").Router()
const WorkForce = require("../../controllers/WorkForce/WorkForce_controller")

router.post("/", WorkForce.WorkForceInsert)
router.get("/", WorkForce.getAllWorkForce)
router.patch("/", WorkForce.WorkForceUpdate)
router.delete("/:id", WorkForce.WorkForceDelete)
router.get("/Employee/:id", WorkForce.getEmployeeProject)
router.get("/Project/:Project_Id", WorkForce.getProjectEmployee)

module.exports = router;