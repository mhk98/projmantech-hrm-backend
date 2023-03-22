const router = require('express').Router()
const ExService = require('../../../controllers/projmanClient/ExService/ExService_controller')
const { upload } = require('../../../middlewares/upload')

router.post("/", upload, ExService.insertExService)
router.delete("/:id", ExService.delete_ExService)
router.get("/", ExService.getAllExService)
router.get("/single/:id", ExService.getOneExService)
router.put("/:id", ExService.updateExService)



module.exports = router