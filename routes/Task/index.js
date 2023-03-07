const router = require("express").Router();
const Task = require("../../controllers/Task/Task.controller");
const { verifyToken } = require("../../utils/verifyToken");
router.post("/createTask", Task.createTask);
router.get("/:Employee_Id", verifyToken, Task.getTasks);
router.put("/:Task_Id", verifyToken, Task.updateTask);
router.delete("/:Task_Id", verifyToken, Task.deleteTask);
router.get("/Project/:id", verifyToken, Task.getProject);
router.put("/:Employee_Id/:Project_Id", verifyToken, Task.updateTaskStatus);
router.get("/:Employee_Id/:Project_Id", verifyToken, Task.getTasksInvidual);
//for getting all tasks in a report
router.get("/", verifyToken, Task.allTasks);
router.post("/Pending/", verifyToken, Task.allPendingTasks);
router.post("/Complete/", verifyToken, Task.allCompleteTasks);
router.post("/Inprogress/", Task.allOngoingTasks);
router.post("/count", verifyToken, Task.TaskCount);
router.post("/Pending/:id", verifyToken, Task.individualPendingTask);
router.post("/Inprogress/:id", verifyToken, Task.individualInprogressTask);
router.post("/Complete/:id", verifyToken, Task.individualCompleteTask);
// router.get("/pendingTasks", Task.pe
// router.get("/pendingTasks", Task.pendingTasks);
// router.get("/pendingTasks", Task.pendingTasks);
// router.get("/pendingTasks", Task.pendingTasks);ndingTasks);
// router.get("/:Task_Id", Task.gettaskById);
module.exports = router;