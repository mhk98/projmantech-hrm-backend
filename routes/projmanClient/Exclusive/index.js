const router = require('express').Router()
const Exclusive = require('../../../controllers/projmanClient/Exclusive/Exclusive_controller')

router.post("/", Exclusive.insertExclusive)
router.delete("/:id", Exclusive.delete_Exclusive)
router.get("/", Exclusive.getAllExclusive)
router.put("/:id", Exclusive.updateExclusive)



module.exports = router