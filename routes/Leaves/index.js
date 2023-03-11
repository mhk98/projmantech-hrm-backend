const router = require('express').Router();
const leaveController = require('../../controllers/Leaves/Leaves.controller');
const { verifyToken } = require("../../utils/verifyToken");
router.post('/apply', verifyToken, leaveController.applyLeave);
router.get('/employee/:Employee_Id', verifyToken, leaveController.getEmployeeLeaves);
router.get('/allLeaves', verifyToken, leaveController.allLeaves);
router.get('/allLeavecount', verifyToken, leaveController.allLeavecount);
router.get('/pendingcount', verifyToken, leaveController.LeaveCount);
router.get('/fromto', verifyToken, leaveController.fromtodateLeave);
router.get('/fromtoemployee', verifyToken, leaveController.fromtoemployeeLeave);
//router.get('/pendingLeaves',verifyToken,leaveController.getPendingLeaves);
//getAnnualLeaveDays
router.post('/getAnnualLeaveDays', verifyToken, leaveController.getAnnualLeaveDays);
// router.put("/adminLeaveControl",leaveController.adminLeaveControl);
router.put("/approveLeave", verifyToken, leaveController.approveLeave);
router.put("/declineLeave", verifyToken, leaveController.declineLeave);
// getDaybyname
// router.post('/DaybyName', leaveController.getDaybyname);
module.exports = router;