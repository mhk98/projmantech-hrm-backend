const router = require('express').Router()
const BestService = require('../../../controllers/projmanClient/BestService/BestService_controller')
const { upload } = require('../../../middlewares/upload')

router.post("/", upload,BestService.insertBestService)
router.delete("/:id", BestService.delete_BestService)
router.get("/", BestService.getAllBestService)
router.put("/:id", BestService.updateBestService)



module.exports = router