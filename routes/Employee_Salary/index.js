const router = require('express').Router();
const Employee_Salary = require("../../controllers/Employee_Salary/Employee_Salary.controler");
const { verifyToken } = require("../../utils/verifyToken");

router.post("/createSalary", Employee_Salary.createEmployeeSalary);
router.get("/", verifyToken, Employee_Salary.getEmployeeSalary);
router.get("/allEmployeeSalary", verifyToken, Employee_Salary.getAllEmployeesalary);
router.post("/search", verifyToken, Employee_Salary.getIndividualEmployeeSalary);
router.delete("/:id", verifyToken, Employee_Salary.deleteEmployeeSalary);
router.delete("/search/:id", verifyToken, Employee_Salary.deleteSearchEmployeeSalary);



module.exports = router;