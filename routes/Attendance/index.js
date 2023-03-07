const router = require("express").Router();
const Attendance = require("../../controllers/Attendance/attendance.controller");
const { verifyToken } = require("../../utils/verifyToken");

router.post("/:id", verifyToken, Attendance.insertAttendanceInfo);
router.patch("/:id", verifyToken, Attendance.updateAttendanceInfo);
router.get("/", verifyToken, Attendance.getAllAttendanceToday);
router.get("/:id", verifyToken, Attendance.getSingleAttendanceToday);
router.get(
  "/single_employee/:id",

  verifyToken,
  Attendance.getSingleEmployeeAllAttendance
);
router.post("/search/:id", verifyToken, Attendance.searchingAttendance);
router.post(
  "/searchadmin/:id",

  Attendance.searchingAttendanceForAdmin
);

module.exports = router;
