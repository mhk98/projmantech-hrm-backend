const router = require('express').Router();
const Employee_Leaves = require('../../controllers/Employee_Leaves/Employee_Leaves.controller');
router.post('/create',Employee_Leaves.createLeave);
router.get('/list',Employee_Leaves.getLeaves);
router.patch('/update/:leaveId',Employee_Leaves.updateLeave);
router.get('/leave-settings', Employee_Leaves.LeaveSettingsController);
router.put('/update-leave', Employee_Leaves.updateLeaveController);
module.exports = router;