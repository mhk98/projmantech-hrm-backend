const sequelize = require('sequelize');
const db = require('../../models');
const Add_Employee = db.add_employee;
const Payslip = db.Payslip;


module.exports.createPayslip = async (req, res) => {
  try {
    let {  Basic_Salary, Conveyance,House_Rent_Allowence,Other_Allowence, addEmployeeEmployeeId } = req.body;
    const payslip = await Payslip.create({
        Basic_Salary,
        Conveyance,
        House_Rent_Allowence,
        Other_Allowence,
        addEmployeeEmployeeId
    });
    res.status(201).send(payslip);
  } catch (error) {
    res.status(500).send(error);
  }
};

///get invidual Payslip by invidual employee id
module.exports.getPayslipInvidual = async(req, res)=>{
  console.log("getPayslip");
  try {
      const { Employee_Id} = req.params;
      const payslip = await Payslip.findAll({ where: { addEmployeeEmployeeId:Employee_Id } });
      return res.status(200).send(payslip);
  } catch (error) {
      return res.status(400).send(error);
  }
}


//for getting all payslip report
module.exports.allPayslip = async (req, res) => {
  try {
    const payslip = await Payslip.findAll();
    res.status(200).send(payslip);
  } catch (error) {
    res.status(500).send(error);
  }
};