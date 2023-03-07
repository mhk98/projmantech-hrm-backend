const router = require('express').Router()
const PortService = require('../../../controllers/projmanClient/PortService/PortService_controller')
const { upload } = require('../../../middlewares/upload')

router.post("/", upload, PortService.insertPortService);
router.delete("/:id", PortService.delete_PortService);
router.get("/", PortService.getAllPortService);
router.get("/single/:id", PortService.getOnePortService);
router.patch("/:id", PortService.updatePortService);
router.get("/:category", PortService.categorywise);




module.exports = router