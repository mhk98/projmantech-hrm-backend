const router = require('express').Router()
const Aboutus = require('../../../controllers/projmanClient/Aboutus/Aboutus_controller')
const { upload } = require('../../../middlewares/upload')

router.post("/", upload, Aboutus.insertAboutus)
router.delete("/:id", Aboutus.delete_Aboutus)
router.get("/", Aboutus.getAllAboutus)
router.put("/:id", Aboutus.updateAboutus)



module.exports = router