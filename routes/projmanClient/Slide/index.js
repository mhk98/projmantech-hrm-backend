const router = require('express').Router()
const Slide = require('../../../controllers/projmanClient/Slide/Slide_controller')
const { upload } = require('../../../middlewares/upload')

router.post("/", upload, Slide.insertSlide)
router.delete("/:id", Slide.delete_Slide)
router.get("/", Slide.getAllSlide)
router.put("/:id", Slide.updateSlide)



module.exports = router