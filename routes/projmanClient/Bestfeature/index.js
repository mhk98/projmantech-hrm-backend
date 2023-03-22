const router = require('express').Router()
const Bestfeature = require('../../../controllers/projmanClient/Bestfeature/Bestfeature_controller')
const { upload } = require('../../../middlewares/upload')

router.post("/",upload, Bestfeature.insertBestfeature)
router.delete("/:id", Bestfeature.delete_Bestfeature)
router.get("/", Bestfeature.getAllBestfeature)
router.put("/:id", Bestfeature.updateBestfeature)



module.exports = router