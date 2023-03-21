const sequelize = require('sequelize');
const db = require('../../models');
const Add_Employee = db.add_employee;
const Deduction = db.Deduction;
const Employee_Salary = db.Employee_Salary;
const { customerLogger, ErrorLogger } = require("../../utils/logger");



module.exports.createDeduction = async (req, res) => {
  try {
    let { Deduction_Reason, Unit_Amount, Deduction_Month, Employee_Name } = req.body;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novembar", "December"];
    let monthIndex = (new Date().getMonth());

    //save month and year value in database
    let month = monthNames[monthIndex];
    // console.log('month', month)
    // let year = (new Date().getFullYear());
    // console.log('(new Date().getMonth())', (new Date().getMonth()))

    const deduction = await Deduction.create({
      Deduction_Reason,
      Unit_Amount,
      Deduction_Month,
      Employee_Name
    });

    // let year = (new Date().getFullYear());
    // console.log('(new Date().getMonth())', (new Date().getMonth()))

    // find all deductions for the employee
    const deductions = await Deduction.findAll({
      where: {
        Employee_Name: Employee_Name,
        Deduction_Month: Deduction_Month
      }

    });

    // console.log('deductions', deductions)
    // console.log('deducation', deductions)

    // // // calculate the total amount of deductions for the employee
    let totalDeduction = 0;
    deductions.forEach(deduct => {
      totalDeduction += parseInt(deduct.Unit_Amount);
      // console.log("Decuction--------------------------------------", deduct);
    });

    // console.log('totalDeducation', totalDeduction)

    const employeeMonthlySalary = await Employee_Salary.findOne({
      where: {
        Employee_Name: Employee_Name,
        Salary_Month: Deduction_Month
      }
    })

    let data = {
      Employee_Name: Employee_Name, Monthly_Salary: employeeMonthlySalary.Monthly_Salary - totalDeduction
    }
    // create a new employee salary record
    const employeeSalary = await Employee_Salary.update(data, {

      where: {
        Employee_Name: Employee_Name,
        Salary_Month: Deduction_Month
      }
    });

    // const salaryInfoInsert = await Employee_Salary.create({
    //   addEmployeeEmployeeId: Employee_Id,
    // });

    res.status(201).send(deduction);
  } catch (error) {
    ErrorLogger.error("createDeduction " + " " + error.message);
    res.status(500).send(error);
  }
};

///get invidual deduction by invidual employee id
module.exports.getDeductionInvidual = async (req, res) => {
  // console.log("getDeduction");
  try {
    const { Employee_Name } = req.params;
    const deduction = await Deduction.findAll({ where: { Employee_Name: Employee_Name } });
    return res.status(200).send(deduction);
  } catch (error) {
    ErrorLogger.error(req.originalUrl + " " + error.message);
    return res.status(400).send(error);
  }
}

//