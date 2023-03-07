const sequelize = require("sequelize");
const db = require("../../models");
const Employee_Salary = db.Employee_Salary;
const Deduction = db.Deduction;
const { customerLogger, ErrorLogger } = require("../../utils/logger");

// function to create an employee salary
module.exports.createEmployeeSalary = async (req, res) => {
    try {
        // destructuring the request body
        let { Employee_Name, Monthly_Salary, Employee_Id } = req.body;
        console.log('insertSalary', req.body)

        console.log('employeeSalaryInfo', Employee_Name, Monthly_Salary, Employee_Id)
        // const { id } = req.params;
        //Send 12 months short name in database
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novembar", "December"];
        let monthIndex = (new Date().getMonth());

        //save month and year value in database
        let month = monthNames[monthIndex];
        // let year = (new Date().getFullYear());
        console.log('(new Date().getMonth())', (new Date().getMonth()))

        // find all deductions for the employee
        // const deductions = await Deduction.findAll({
        //     where: {
        //         Employee_Id: Employee_Id,
        //         Deduction_Month: month
        //     }

        // });

        // // console.log('deductions', deductions)
        // // console.log('deducation', deductions)

        // // // // calculate the total amount of deductions for the employee
        // let totalDeduction = 0;
        // deductions.forEach(deduct => {
        //     totalDeduction += parseInt(deduct.Unit_Amount);
        //     // console.log("Decuction--------------------------------------", deduct);
        // });

        // console.log('totalDeducation', totalDeduction)


        // create a new employee salary record
        const employeeSalary = await Employee_Salary.create({
            Employee_Name,
            Salary_Month: month,
            // subtract the total deductions from the monthly salary to get the net salary
            Monthly_Salary,
            // Monthly_Salary: Monthly_Salary,
            Employee_Id
        });

        // return the newly created employee salary record
        res.status(200).send(employeeSalary);
    } catch (error) {
        // return an error 
        res.status(500).send(error);
        ErrorLogger.error("createEmployeeSalary" + " " + error.message);
    }
};


// function to get employee salary record
module.exports.getEmployeeSalary = async (req, res) => {
    try {
        // get the employee id from the request parameters
        // const { Employee_Id } = req.params;

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novembar", "December"];
        let monthIndex = (new Date().getMonth());

        //save month and year value in database
        let month = monthNames[monthIndex];
        // let year = (new Date().getFullYear());
        console.log('(new Date().getMonth())', (new Date().getMonth()))


        // find all the salary records for the employee
        const employeeSalary = await Employee_Salary.findAll({
            where: { Salary_Month: month }
        });

        // return the salary records
        res.status(200).send(employeeSalary);
    } catch (error) {
        // return an error 
        res.status(400).send(error);
        ErrorLogger.error(req.originalUrl + " " + error.message);
    }
};
// function to get individual employee salary record
module.exports.getIndividualEmployeeSalary = async (req, res) => {
    try {
        const { Salary_Month, Employee_Name } = req.body;



        console.log('payload', Salary_Month, Employee_Name)
        console.log('getIndividualEmployeeSalary', Salary_Month, Employee_Name)

        // find all the salary records for the employee
        const result = await Employee_Salary.findOne({

            where: { Salary_Month: Salary_Month, Employee_Name: Employee_Name }
        });


        if (!result) {
            return res.status(404).send({
                status: 'Fail',
                message: 'Employee data not found on database'
            })

        }
        // return the salary records
        res.status(200).send({
            status: 2,
            result
        });
    } catch (error) {
        // return an error 
        res.status(400).send(error);
        ErrorLogger.error("getIndividualEmployeeSalary" + " " + error.message);
    }
};


//Delete employee salary information here

module.exports.deleteEmployeeSalary = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Salary_Id', id)
        const result = await Employee_Salary.destroy({
            where: { Salary_Id: id },
        });
        res.status(200).send({
            status: 1,
            message: "Successfully delete employee salary information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Couldn't delete employee salary information",
            error: error.message,
        });
        ErrorLogger.error(req.originalUrl + " " + error.message);

    }
};
//Delete employee salary information here

module.exports.deleteSearchEmployeeSalary = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Salary_Id', id)
        const result = await Employee_Salary.destroy({
            where: { Salary_Id: id },
        });
        res.status(200).send({
            status: 1,
            message: "Successfully delete employee salary information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Couldn't delete employee salary information",
            error: error.message,
        });
        ErrorLogger.error(req.originalUrl + " " + error.message);
    }
};