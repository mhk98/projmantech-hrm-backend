const router = require('express').Router()
const Asset = require('../../controllers/Asset/Asset_controller')

router.post("/", Asset.insertAsset)
router.delete("/:id", Asset.delete_Asset)
router.get("/", Asset.getAllAsset)
router.get("/:id", Asset.getAsset)



module.exports = router