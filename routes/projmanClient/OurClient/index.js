const router = require("express").Router()
const OurClient = require("../../../controllers/projmanClient/OurClient/OurClient_controller")
const { upload } = require("../../../middlewares/upload")

router.post("/", upload, OurClient.insertOurClient)
router.get("/", OurClient.getAllOurClient)
router.delete("/:id",OurClient.delete_OurClient)

module.exports = router;