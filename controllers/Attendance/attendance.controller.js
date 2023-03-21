const db = require("../../models");
var ip = require("ip");
const moment = require("moment/moment");
const Attendance = db.Attendance;
const { Sequelize, Op } = require("sequelize");

const { customerLogger, ErrorLogger } = require("../../utils/logger");

module.exports.insertAttendanceInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log("addEmployeeEmployeeId", id);
    const { Employee_Name } = req.body;

    // console.log("Employee_Name", Employee_Name);

    if (!id || !Employee_Name) {
      return res.send("Id or Employee name not found");
    }

    const current = new Date();
    const last_Time = "10:10:00";
    if (current.toLocaleTimeString() <= last_Time) {
      Attendance_Status = "Present";
    } else if (last_Time < current.toLocaleTimeString()) {
      Attendance_Status = "Late";
    } else {
      Attendance_Status = "Absence";
    }

    //Send 12 months short name in database
    // const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // let monthIndex = (new Date().getMonth());

    //save month and year value in database
    // let month = monthNames[monthIndex];
    // let year = (new Date().getFullYear());
    // console.log('(new Date().getMonth())', (new Date().getMonth()))
    let attendance_Model = {
      Employee_Name: Employee_Name,
      Employee_Name: Employee_Name,
      Time_In: new Date(),
      Time_Out: new Date(),
      Date_Today: new Date(),
      Device_Ip: ip.address(),
      Attendance_Status,
      addEmployeeEmployeeId: id,
    };

    const { Time_Out, ...rest } = attendance_Model;

    // console.log("attendance_Model", attendance_Model);
    // const result1 = await Attendance.create({
    //   Time_In: new Date(),
    //   Time_Out: new Date(),
    //   Date_Today: new Date(),
    //   Device_Ip: ip.address(),
    //   Attendance_Status,
    //   addEmployeeEmployeeId: id,
    // });

    //multiple insert check single day for employee
    const existInsertcheck = await Attendance.findOne({
      where: {
        addEmployeeEmployeeId: id,
        Date_Today: new Date(),
      },
    });
    // console.log("existInsertcheck", existInsertcheck);
    if (!existInsertcheck) {
      const result = await Attendance.create(rest);

      // console.log("result", result1);

      res.status(200).send({
        status: 1,
        message: "Successfully added attendance information",
        data: result,
      });
    } else {
      return res.status(404).send({
        status: "Fail",
        message: "You already insert your entry time.",
      });
    }
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Couldn't found attendance information",
      error: error.message,
    });
    ErrorLogger.error("insertAttendanceInfo" + " " + error.message);
  }
};

//update attendance info for get timeout
module.exports.updateAttendanceInfo = async (req, res) => {
  try {
    // console.log(`this is the cookies awesome ${req.cookies.jwt}`);

    const { id } = req.params;
    const current = new Date();
    const last_Time = "10:10:00";
    if (current.toLocaleTimeString() <= last_Time) {
      Attendance_Status = "Present";
    } else if (last_Time < current.toLocaleTimeString()) {
      Attendance_Status = "Late";
    } else {
      Attendance_Status = "Absence";
    }
    let attendance_Model = {
      Time_In: new Date(),
      Time_Out: new Date(),
      Date_Today: new Date(),
      Device_Ip: ip.address(),
      Attendance_Status,
      addEmployeeEmployeeId: id,
    };
    const { Time_In, ...others } = attendance_Model;

    const result = await Attendance.update(others, {
      where: {
        addEmployeeEmployeeId: id,
        Date_Today: new Date(),
      },
    });
    res.status(200).send({
      status: 2,
      message: "Successfully added attendance information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "Attendance information not found",
      error: error.message,
    });
    ErrorLogger.error("updateAttendanceInfo" + " " + error.message);
  }
};

//Get all present employee attendance information
module.exports.getAllAttendanceToday = async (req, res) => {
  try {
    const result = await Attendance.findAll({
      where: {
        Date_Today: new Date(),
      },
    });
    if (!result) {
      return res.send("Result not found");
    }
    res.status(200).send({
      status: "Success",
      message: "All attendance information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Employee Attendance not found",
      error: error.message,
    });
    ErrorLogger.error("getAllAttendanceToday" + " " + error.message);
  }
};

//Single employee information for today
module.exports.getSingleAttendanceToday = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Attendance.findOne({
      where: {
        addEmployeeEmployeeId: id,
        Date_Today: new Date(),
      },
    });
    if (!result) {
      return res.send("Result not found");
    }
    res.status(200).send({
      status: "Success",
      message: "Today attendance information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Employee Attendance not found",
      error: error.message,
    });
    ErrorLogger.error("getSingleAttendanceToday" + " " + error.message);
  }
};

module.exports.getSingleEmployeeAllAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("attendance params", id);
    if (!id) {
      return res.status(404).send("Params id not found");
    }

    const result = await Attendance.findAll({
      where: {
        addEmployeeEmployeeId: id,
      },
    });

    // console.log("adminresult", result);
    if (!result) {
      return res.status(404).send("Attendance information not found");
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got attendance information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "Couldn't get attendance information",
      error: error.message,
    });
    ErrorLogger.error(req.originalUrl + " " + error.message);
  }
};

//Get attendance information using search method

module.exports.searchingAttendance = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;
    const { id } = req.params;
    const endOfDateRange = new Date(startDate);
    const startOfDateRange = new Date(endDate);
    // console.log("endOfDateRange", endOfDateRange);
    // console.log("startOfDateRange", startOfDateRange);

    const result = await Attendance.findAll({
      where: {
        addEmployeeEmployeeId: id,
        Date_Today: {
          [Op.and]: {
            [Op.gte]: endOfDateRange,
            [Op.lte]: startOfDateRange,
          },
        },
      },
    });
    res.status(200).send({
      status: 2,
      message: "Successfully got attendance information",
      result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "Couldn't get attendance information",
      error: error.message,
    });
    ErrorLogger.error(req.originalUrl + " " + error.message);
  }
};

//Get attendance information for admin using search method

// module.exports.searchingAttendanceForAdmin = async (req, res) => {
//   try {
//     const { startDate, endDate, Employee_Name } = req.body;

//     console.log("information", startDate, endDate, Employee_Name);
//     const { id } = req.params;
//     console.log("params", id);
//     const endOfDateRange = new Date(startDate);
//     const startOfDateRange = new Date(endDate);
//     console.log("endOfDateRange", endOfDateRange);
//     console.log("startOfDateRange", startOfDateRange);

//     const result = await Attendance.findAll({
//       where: {
//         addEmployeeEmployeeId: id,
//         Employee_Name: Employee_Name,
//         Date_Today: {
//           [Op.and]: {
//             [Op.lte]: startOfDateRange,
//             [Op.gte]: endOfDateRange,
//           },
//         },
//       },
//     });

//     console.log("attendanceAdminSearch", result);
//     res.status(200).send({
//       status: 2,
//       message: "Successfully got attendance information",
//       result,
//     });
//   } catch (error) {
//     res.status(400).send({
//       status: "Fail",
//       message: "Couldn't get attendance information",
//       error: error.message,
//     });
//     ErrorLogger.error(req.originalUrl + " " + error.message);
//   }
// };

module.exports.searchingAttendanceForAdmin = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;
    // console.log("information", startDate, endDate);
    const { id } = req.params;
    const endOfDateRange = new Date(startDate);
    const startOfDateRange = new Date(endDate);
    // console.log("endOfDateRange", endOfDateRange);
    // console.log("startOfDateRange", startOfDateRange);
    const result = await Attendance.findAll({
      where: {
        addEmployeeEmployeeId: id,
        Date_Today: {
          [Op.and]: {
            [Op.gte]: endOfDateRange,
            [Op.lte]: startOfDateRange,
          },
        },
      },
    });
    res.status(200).send({
      status: 2,
      message: "Successfully got attendance information",
      result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "Couldn't get attendance information",
      error: error.message,
    });
    ErrorLogger.error(req.originalUrl + " " + error.message);
  }
};
