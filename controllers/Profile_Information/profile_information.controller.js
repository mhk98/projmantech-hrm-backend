const db = require("../../models");

const Profile_Information = db.Profile_Information;
// const Add_Employee = db.add_employee;
const { customerLogger, ErrorLogger } = require("../../utils/logger");

//Insert employee profile information
module.exports.profile_information = async (req, res) => {
  try {
    // const profile = req.body;
    // console.log("profile_information", profile);

    const {
      Address,
      Employee_LastName,
      Employee_FirstName,
      Employee_Id,
      Gender,
      Phone,
      State,
      Department,
      Email,
      Password,
      Birth_Date,
      Designation,
      Pin_Code,
      Country,
      Reports_To,
    } = req.body;

    let data = {
      Address,
      Employee_LastName,
      Employee_FirstName,
      Employee_Id,
      Gender,
      Phone,
      State,
      Department,
      Email,
      Password,
      Birth_Date,
      Designation,
      Pin_Code,
      Country,
      Reports_To,
      Img: req.file.path,
    };
    const result = await Profile_Information.create(data);
    res.status(200).send({
      status: "Success",
      message: "Thank you for successfully added profile information",
      result,
    });
  } catch (error) {
    ErrorLogger.error("profile_information" + " " + error.message);
    res.status(400).send({
      status: "Success",
      message: "You couldn't add profile information",
      error: error.message,
    });
  }
};

//Get single user profile information
module.exports.single_profile_information = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Profile_Information.findOne({
      where: { Employee_Id: id },
    });
    if (!result) {
      return res.status(400).send("Result not found");
    }

    res.status(200).send({
      status: "Success",
      message: "This is your information",
      data: result,
    });
  } catch (error) {
    ErrorLogger.error(req.originalUrl + " " + error.message);
    res.status(400).send({
      status: "fail",
      message: "No employee found",
      error: error.message,
    });
  }
};

// function updateit(upName) {
//   const Employee_firstName = upName.Employee_FirstName;
//   const Employee_lastName = upName.Employee_LastName;
//   const id = upName.id;

//   const result = Add_Employee.update(
//     {
//       Employee_FirstName: Employee_firstName,
//       Employee_LastName: Employee_lastName,
//     }, // attribute
//     { where: { Employee_Id: id } } // condition
//   );

//   console.log("add employee update", result);

//   // const addEmployeeUpdate = Add_Employee.update(upName, {Where: {Employee_Id: id}});
//   // console.log("update ki hoise?", addEmployeeUpdate);
// }

//User information update
module.exports.profile_information_update = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("paramsId", id);
    const {
      Address,
      Employee_LastName,
      Employee_FirstName,
      Employee_Id,
      Gender,
      Phone,
      State,
      Department,
      Email,
      Birth_Date,
      Designation,
      Pin_Code,
      Country,
      Reports_To,
    } = req.body;

    // console.log("request body", req.body);

    if (!id) {
      return res.status(400).send("Id not found");
    }

    let data = {
      Address,
      Employee_LastName,
      Employee_FirstName,
      Employee_Id,
      Gender,
      Phone,
      State,
      Department,
      Email,
      Birth_Date,
      Designation,
      Pin_Code,
      Country,
      Reports_To,
      Img: req.file.path,
    };

    // console.log("profileInfoUpdate", data);
    const result = await Profile_Information.update(data, {
      where: { Employee_Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "Profile information not found",
      });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully employee information update",
      data: result,
    });
  } catch (error) {
    ErrorLogger.error(req.originalUrl + " " + error.message);

    res.status(400).send({
      status: "fail",
      message: "No employee found",
      error: error.message,
    });
  }
};
