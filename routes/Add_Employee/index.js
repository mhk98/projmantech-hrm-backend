const router = require("express").Router();
const Add_Employee = require("../../controllers/Add_Employee/add_employee.controller");
const { upload } = require("../../middlewares/upload");
const { verifyToken } = require("../../utils/verifyToken");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

// router.post("/", upload.single("Img"), Add_Employee.add_employee);
router.post("/", upload, Add_Employee.add_employee);
router.put("/:id", verifyToken, upload, Add_Employee.updateEmployeeInformation);
router.delete("/:id", verifyToken, Add_Employee.deleteEmployeeInformation);
router.get("/", verifyToken, Add_Employee.getAllEmployee);
router.get("/:id", verifyToken, Add_Employee.SingleEmployeeInformation);
router.post("/count", verifyToken, Add_Employee.EmployeeCount);

module.exports = router;
