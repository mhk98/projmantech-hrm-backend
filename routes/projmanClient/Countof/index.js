const router = require('express').Router()
const Countof = require('../../../controllers/projmanClient/Countof/Countof_controller')
const { upload } = require('../../../middlewares/upload')

router.post("/", upload, Countof.insertCountof)
router.delete("/:id", Countof.delete_Countof)
router.get("/", Countof.getAllCountof)
router.patch("/:id", Countof.updateCountof)



module.exports = router