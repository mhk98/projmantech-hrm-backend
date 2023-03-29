const db = require("../../models");
const sequelize = db.sequelize;
const Add_Employee = db.add_employee;
const Personal_Information = db.Personal_Information;
const Education_Information = db.Education_Informations;
const Emergency_Contact = db.Emergency_Contact;
const Employee_BankInfo = db.Employee_BankInfo;
const Attendance = db.Attendance;
const Profile_Information = db.Profile_Information;
const User = db.user;
const { customerLogger, ErrorLogger } = require("../../utils/logger");

module.exports.add_employee = async (req, res, file) => {
  try {
    const employee = req.body;
    // console.log("ImagePath", req.file);
    const {
      Employee_Id,
      Employee_FirstName,
      Employee_LastName,
      Password,
      Email,
      Phone,
      Department,
      Designation,
      Company,
      Joining_Date,
    } = req.body;
    // console.log("Employee_Id", Employee_Id);


    const employeeCheck = await Add_Employee.findOne({
      where: {
        Email: Email
      }
    })


    if (employeeCheck) {
      return res.status(403).send({
        status: "Fail",
        message: "Employee already exist",
      })
    } else {
      // Insert employee information in Add_Employee table
      const result = await Add_Employee.create({
        Employee_Id,
        Employee_FirstName,
        Employee_LastName,
        Password,
        Email,
        Phone,
        Department,
        Designation,
        Company,
        Joining_Date,
        Img: req.file.path,
      });

      // console.log("ImagePathInfo", req.file);
      // const result = await Add_Employee.create(employee);
      //Insert Employee_Id in Personal_Information table
      const personalInfoInsert = await Personal_Information.create({
        Employee_Id: Employee_Id,
      });
      //Insert Employee_Id in Profile_Information table
      const profileInfoInsert = await Profile_Information.create({
        Employee_Id: Employee_Id,
        Employee_FirstName: Employee_FirstName,
        Employee_LastName: Employee_LastName,
        Email: Email,
        Phone: Phone,
        Department: Department,
        Designation: Designation,
        Img: req.file.path,
      });

      //Insert Employee_Id in Employee_BankInfo table
      const employeeBankInfoInsert = await Employee_BankInfo.create({
        Employee_Id: Employee_Id,
      });

      //Insert Employee_Id in Education_Information table
      const educationInfoInsert = await Education_Information.create({
        addEmployeeEmployeeId: Employee_Id,
      });

      //Insert Employee_Id in Emergency_Contact table
      const emergencyContactInsert = await Emergency_Contact.create({
        addEmployeeEmployeeId: Employee_Id,
      });
      // const attendanceInsert = await Attendance.create({
      //   addEmployeeEmployeeId: Employee_Id,
      // });




      const newuser = await User.create({
        User_ID: Employee_Id,
        User_Name: Employee_FirstName,
        pass_word: Password,
        User_Email: Email,
        role: "user",
      });

      // console.log("User", newuser);

      res.status(200).send({
        status: "Success",
        message: "You successfully added employee information",
        data: result,
      });
    }

  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "You couldn't added employee informaion",
      error: error.message,
    });
    ErrorLogger.error("add_employee create" + " " + error.message);
  }
};

//All employee information here
module.exports.getAllEmployee = async (req, res) => {
  try {
    const result = await Add_Employee.findAll();
    if (!result) {
      return res.send("Result not found");
    }

    res.status(200).send({
      status: "Success",
      message: "All employee information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Employee information not found",
      error: error.message,
    });
    ErrorLogger.error("getAllEmployee" + " " + error.message);
  }
};

//Update employee information here

module.exports.updateEmployeeInformation = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("updateInfo", req.body);
    const {
      Employee_Id,
      Employee_FirstName,
      Employee_LastName,
      Password,
      Email,
      Phone,
      Department,
      Designation,
      Company,
      Joining_Date,
    } = req.body;

    let data = {
      Employee_Id,
      Employee_FirstName,
      Employee_LastName,
      Password,
      Email,
      Phone,
      Department,
      Designation,
      Company,
      Joining_Date,
      Img: req.file.path,
    };
    const result = await Add_Employee.update(data, {
      where: { Employee_Id: id },
    });

    // let profileInfo = {
    //   Employee_Id,
    //   Employee_FirstName,
    //   Employee_LastName,
    //   Email,
    //   Phone,
    //   Department,
    //   Designation,
    //   Img: req.file.path,
    // };
    // const profileInfoUpdate = await Profile_Information.update(profileInfo, {
    //   where: { Employee_Id: id },
    // });

    res.status(200).send({
      status: "Success",
      message: "Successfully update employee information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Couldn't update employee information",
      error: error.message,
    });
    ErrorLogger.error("updateEmployeeInformation" + " " + error.message);
  }
};

//Delete employee information here

module.exports.deleteEmployeeInformation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await User.destroy({
      where: { User_ID: id },
    });
    const employeestatus = await Add_Employee.update(
      { Status: 'Deactivated' },
      { where: { Employee_Id: id } }
    );

    res.status(200).send({
      status: "Success",
      message: "Successfully delete employee information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Couldn't delete employee information",
      error: error.message,
    });
    ErrorLogger.error("deleteEmployeeInformation" + " " + error.message);
  }
};

//single employee information using get request
module.exports.SingleEmployeeInformation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send("Id not found");
    }
    const result = await Add_Employee.findOne({
      where: { Employee_Id: id },
    });

    if (!result) {
      return res.send("Result not found");
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got employee information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Couldn't find employee information",
      error: error.message,
    });
    ErrorLogger.error("SingleEmployeeInformation" + " " + error.message);
  }
};

//Count all employee
module.exports.EmployeeCount = async (req, res) => {
  try {
    const employeeCount = await Add_Employee.count().then((employee) => {
      // console.log("employee", employee);

      if (!employee) {
        return res.status(404).send("Employeecount not found");
      }

      res.status(200).send({
        status: "Success",
        message: "Successfully got total employeee count",
        employee,
      });
    });
  } catch (error) {
    ErrorLogger.error("EmployeeCount" + " " + error.message);
    res.status(400).send({
      status: "fail",
      message: "Couldn't find employee information",
      error: error.message,
    });
  }
};

// update employee name from profile information

//  function updateEmployeeName(Employee_FirstName,Employee_LastName,Employee_Id) {
//   try {
//     //const { id } = req.params;
//     const result = await sequelize.query("update add_employees set Employee_FirstName = :Employee_firstName, Employee_LastName = :Employee_lastName where Employee_Id = ?", {
//       replacements: [Employee_firstName: Employee_FirstName, Employee_lastName: Employee_LastName,Employee_Id],
//       type: sequelize.QueryTypes.Update
//     })
//     res.status(200).send({
//       status: "Success",
//       message: "Successfully update employee information",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).send({
//       status: "fail",
//       message: "Couldn't update employee information",
//       error: error.message,
//     });
//   }
// };
