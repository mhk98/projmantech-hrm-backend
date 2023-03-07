const router = require('express').Router()
const Job = require('../../controllers/Job/Job_controller')

router.post("/", Job.insertJob)
router.delete("/:id", Job.delete_Job)
router.put("/:id", Job.update_Job)
router.get("/", Job.getAllJob)
router.get("/:id", Job.getJob)



module.exports = router