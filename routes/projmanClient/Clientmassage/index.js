const router = require('express').Router()
const Clientmassage = require('../../../controllers/projmanClient/Clientmassage/Clientmassage_controller')

router.post("/", Clientmassage.insertClientmassage)
router.delete("/:id", Clientmassage.delete_Clientmassage)
router.get("/", Clientmassage.getAllClientmassage)
router.put("/:id", Clientmassage.updateClientmassage)



module.exports = router