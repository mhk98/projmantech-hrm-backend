const router = require('express').Router();
const noticeController = require("../../controllers/Notice/Notice.controller");

router.post("/createNotice", noticeController.createNotice);
//for getting all notices
router.get("/getNotice", noticeController.getNotices);
//for getting invidual notice
router.get("/:notice_id", noticeController.getNoticeById);
router.put("/:notice_id", noticeController.updateNotice);
router.delete("/:notice_id", noticeController.deleteNotice);

module.exports = router;