const router = require('express').Router();
const Resignation = require("../../controllers/Resignation/Resignation.controller");

const { verifyToken } = require("../../utils/verifyToken");

router.post("/createResignation",verifyToken,Resignation.createResignation);
router.get("/getResignation",verifyToken,Resignation.getResignation);


module.exports = router;