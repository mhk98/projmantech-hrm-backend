const router = require('express').Router()
const Portfolio = require('../../../controllers/projmanClient/Portfolio/Portfolio_controller')

router.post("/", Portfolio.insertPortfolio)
router.delete("/:id", Portfolio.delete_Portfolio)
router.get("/", Portfolio.getAllPortfolio)
router.put("/:id", Portfolio.updatePortfolio)



module.exports = router