const router = require("express").Router();
const Client = require("../../controllers/PMT_Clients/pmt_clients.controller");
const { upload } = require("../../middlewares/upload");

router.post("/", upload, Client.clientInsert);
router.delete("/:id", Client.delete_Client);
router.get("/", Client.getAllClients);
router.get("/:id", Client.getOneClient);
router.post("/count", Client.clientCount);

module.exports = router;
