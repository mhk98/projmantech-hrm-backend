const router = require('express').Router();
const Termination = require("../../controllers/Termination/Termination.controller");

router.post("/createTermination",Termination.createTermination);
router.get("/getTermination",Termination.getTermination);



module.exports = router;