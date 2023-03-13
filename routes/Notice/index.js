const router = require('express').Router();
const noticeController = require("../../controllers/Notice/Notice.controller");

router.post("/", noticeController.createNotice);
//for getting all notices
router.get("/", noticeController.getNotices);
//for getting invidual notice
// router.get("/:notice_id", noticeController.getNoticeById);
router.put("/:id", noticeController.updateNotice);
router.delete("/:id", noticeController.deleteNotice);

module.exports = router;