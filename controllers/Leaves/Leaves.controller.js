// const sequelize = require('sequelize');
const db = require("../../models");
const sequelize = db.sequelize;
const moment = require("moment");
const { addISOWeekYears } = require("date-fns");
const { customerLogger, ErrorLogger } = require("../../utils/logger");
const { INTEGER } = require("sequelize");

const Leave = db.Leaves;
const Holiday = db.Holiday;
const Add_Employee = db.add_employee;
let maxMonthLeavedays;

//getAnnualLeaveDays
module.exports.getAnnualLeaveDays = async (req, res) => {
  try {
    const Employee_Id = req.body.employee_Id;
    let leaveTaken = 0;
    // Find all leaves with status 'approved with emoloye day
    const apporevedLeave = await Leave.findAll({
      where: {
        status: "approved",
        addEmployeeEmployeeId: Employee_Id,
      },
    });
    if (apporevedLeave) {
      apporevedLeave.forEach((apL) => {
        //yearCheck
        //get the leave date year
        // todays  yeear
        let dt_today = new Date();
        let year = dt_today.getFullYear().toString();
        //geting the year of start date
        let start_date = new Date(apL.startDate);
        let start_year = start_date.getFullYear().toString();
        //geting the year of end date
        let end_date = new Date(apL.endDate);
        let end_year = end_date.getFullYear().toString();
        if (year == start_year && year == end_year) {
          if (apL.leaveType === "annualLeave") {
            leaveTaken = leaveTaken + apL.CountedDaysOfTakenLeave;
          }
        }
      });
    }

    let dt_currentMonth = new Date();
    // let maxMonthLeavedays = 0;
    let Currnet_Month = dt_currentMonth.getMonth() + 1; //making the months in 1th index
    if (0 < Currnet_Month && Currnet_Month <= 5) {
      maxMonthLeavedays = Currnet_Month - leaveTaken;

      if (maxMonthLeavedays <= 0) {
        //create responmse as maxMonthLeavedays = 0
        maxMonthLeavedays = 0;
      }
    } else if (5 < Currnet_Month && Currnet_Month <= 12) {
      maxMonthLeavedays = Currnet_Month - leaveTaken;

      if (maxMonthLeavedays >= 5) {
        //create responmse as maxMonthLeavedays = 5

        maxMonthLeavedays = 5;
      } else if (maxMonthLeavedays <= 0) {
        //create responmse as maxMonthLeavedays
        maxMonthLeavedays = 0;
      }
    } // Send the pending leaves to the admin
    // console.log("maxMonthLeavedays", maxMonthLeavedays);
    res.status(200).json({ maxLeaveForCurrentMonth: maxMonthLeavedays });
    // res.sendStatus(200).send(maxMonthLeavedays);
    // res.status(200)
  } catch (error) {
    res.status(500).send(error);
    ErrorLogger.error("getAnnualLeaveDays" + " " + error.message);
  }
};

//hloday to array function
async function arrayHoliday() {
  try {
    let arrayOfHolidayesDates = [];
    let dates;
    let getAllHolidayDays = await Holiday.findAll({
      attributes: ["Holiday_Date"],
    });
    if (getAllHolidayDays) {
      getAllHolidayDays.forEach((element) => {
        dates = element.Holiday_Date;
        const date = moment(dates).format("YYYY-MM-DD");
        // console.log(date);
        arrayOfHolidayesDates.push(date);
      });
    }
    // console.log("getAllHolidayDays", arrayOfHolidayesDates);

    return arrayOfHolidayesDates;
  } catch (error) {
    ErrorLogger.error("arrayHoliday" + " " + error.message);
  }
}
//get friday function
function isFriday(date) {
  try {
    let d = new Date(date);
    var dt = moment(d, "YYYY-MM-DD HH:mm:ss");
    let a = dt.format("dddd");
    // console.log(a);
    if (a == "Friday") {
      return 1;
    } else {
      return 0;
    }
    // Send the pending leaves to the admin
  } catch (error) {
    ErrorLogger.error("isFriday" + " " + error.message);
  }
}
//leave
module.exports.applyLeave = async (req, res) => {
  try {
    //response reqried variables
    let leaveDays = [];
    let ApplicableLeaveDays = 0;
    let unpaid = 0;
    let leaveApplicationStatus = "NOT APPROVED";
    let leaveObject = {};

    //req body parse
    let Employee_Id = req.body.addEmployeeEmployeeId;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let leaveType = req.body.leaveType;
    // let AllowedMaxleaveDays = req.body.AllowedMaxleaveDays;
    let Leave_Reason = req.body.Leave_Reason;

    // console.log("Leave Reason 1-----------------------------", Leave_Reason);

    // Check if the start date is before the end date
    if (moment(startDate).isAfter(moment(endDate))) {
      // console.log("Start date must be before end date");
      // throw new Error("Start date must be before end date");
      return res
        .status(200)
        .json({ error: "Start date must be before end date" });
    }

    //getting supporing variables
    let holiday_array = await arrayHoliday();
    let aDateObject_array = [];

    // let aDateObject = {
    //     date:'2023-03-01',
    //     isHoliday:0,
    //     isFriday:0
    // }

    // loop through start and end date
    //making a date object where we can get working days to count
    const Moment_startDate = moment(startDate, "YYYY-MM-DD"); // Start date
    const Moment_endDate = moment(endDate, "YYYY-MM-DD"); // End date

    while (Moment_startDate.isSameOrBefore(Moment_endDate)) {
      let aDateObject = {};
      let loopDate = Moment_startDate.format("YYYY-MM-DD");

      aDateObject.date = loopDate;
      aDateObject.isFriday = isFriday(loopDate);

      const index = holiday_array.indexOf(loopDate);
      if (index !== -1) {
        aDateObject.isHoliday = 1;
      } else {
        aDateObject.isHoliday = 0;
      }

      if (aDateObject.isFriday === 0 && aDateObject.isHoliday === 0) {
        ApplicableLeaveDays = ApplicableLeaveDays + 1;
        // console.log(aDateObject);
        // console.log(ApplicableLeaveDays);
      }
      aDateObject_array.push(aDateObject);

      Moment_startDate.add(1, "day"); // Increment the date by 1 day
    }

    //sql requried variables
    let remainingLeaves = 12;
    let status = "pending";
    let msgFromAdmin = "";
    let addEmployeeEmployeeId = Employee_Id;
    let lastAnnualLeaveUpdate = moment().format("YYYY-MM-DD HH:mm:ss");

    // getting the last leave of an employee
    let lastTakenLeave = await Leave.findOne({
      where: {
        addEmployeeEmployeeId: Employee_Id,
        status: "approved",
        leaveType: "annualLeave",
      },
      order: [["Leave_Id", "DESC"]],
    });
    if (lastTakenLeave) {
      // console.log(lastTakenLeave.dataValues);
      //update annaulleave for new year
      const date1 = moment(lastTakenLeave.endDate);
      const date2 = moment(Moment_endDate);

      const diffInYears = date2.diff(date1, "years");
      // console.log("diffInYears", diffInYears);

      if (diffInYears >= 1) {
        remainingLeaves = 12;
        lastAnnualLeaveUpdate = moment().format("YYYY-MM-DD HH:mm:ss");
      } else {
        remainingLeaves = lastTakenLeave.remainingLeaves;
        lastAnnualLeaveUpdate = lastTakenLeave.lastAnnualLeaveUpdate;
      }
    } else {
      //check its from a valid user or not
      // Check if the employee exists
      const employee = await Add_Employee.findOne({
        where: { Employee_Id },
      });
      if (!employee) {
        leaveApplicationStatus = "Employee not found";
        return res.status(200).json({ error: leaveApplicationStatus });
      }
    }

    //check for annualLeave to unPaidleave
    if (leaveType === "annualLeave") {
      //check maxallowed leave and ApplicableLeaveDays
      // console.log(AllowedMaxleaveDays , ApplicableLeaveDays);
      if (maxMonthLeavedays >= ApplicableLeaveDays) {
        // console.log("ok to approve");
        leaveApplicationStatus = "OK TO APPROVE";
        // remainingLeaves = remainingLeaves - ApplicableLeaveDays;
        if (remainingLeaves - ApplicableLeaveDays < 0) {
          leaveApplicationStatus =
            "you have taken more leaves than reserved leaves for application select unpaidLeave";
          return res.status(200).json({ error: leaveApplicationStatus });
        }
        // startDate: "2023-06-01T00:00:00.000Z",
        // endDate: "2023-06-05T00:00:00.000Z",
        // leaveType: "annualLeave",
        // status: "pending",
        // annualLeaves: 12,
        // remainingLeaves: 12,
        // lastAnnualLeaveUpdate: "2023-02-18T10:00:00.000Z",
        // msgFromAdmin: "Leave approved",
        // CountedDaysOfTakenLeave: 4,
        // addEmployeeEmployeeId: 1
        leaveObject.startDate = startDate;
        leaveObject.endDate = endDate;
        leaveObject.leaveType = "annualLeave";
        leaveObject.status = status;
        leaveObject.annualLeaves = 12;
        leaveObject.unpaidLeaves = 0;
        leaveObject.remainingLeaves = remainingLeaves;
        leaveObject.lastAnnualLeaveUpdate = lastAnnualLeaveUpdate;
        leaveObject.msgFromAdmin = msgFromAdmin;
        leaveObject.CountedDaysOfTakenLeave = ApplicableLeaveDays;
        leaveObject.addEmployeeEmployeeId = addEmployeeEmployeeId;
        leaveObject.Leave_Reason = Leave_Reason;

        // console.log(
        //   " Leave Remaning-----------------------------",
        //   remainingLeaves
        // );
        //Leave_Reason

        //creating the leave instance for this req
        try {
          const leaveInsert = await Leave.create(leaveObject);
          if (!leaveInsert) {
            return res
              .status(200)
              .json({ error: "insert error for leave, Please try again" });
          }
          leaveApplicationStatus = "Leave Applcation Submitted";
        } catch (error) {
          throw new Error(error.message);
          ErrorLogger.error("leaveInsert" + " " + error.message);
        }
      } else {
        // console.log("Not ok to approve");
        leaveApplicationStatus = `Asked leave days are more than Allowed leave days .select unpaid leave category`;
        return res.status(200).json({ error: leaveApplicationStatus });
      }
    } else if (leaveType === "unpaidLeave") {
      unpaid = ApplicableLeaveDays - maxMonthLeavedays;

      remainingLeaves = remainingLeaves - maxMonthLeavedays;

      if (remainingLeaves < 0) {
        remainingLeaves = 0;
      }

      //unpaid leave is unpaid leave,it will not bother anymore,it will not deduct from annualLeave 12 value
      leaveObject.startDate = startDate;
      leaveObject.endDate = endDate;
      leaveObject.leaveType = "unpaidLeave";
      leaveObject.status = status;
      leaveObject.annualLeaves = 12;
      leaveObject.unpaidLeaves = unpaid;
      leaveObject.remainingLeaves = remainingLeaves;
      leaveObject.lastAnnualLeaveUpdate = lastAnnualLeaveUpdate;
      leaveObject.msgFromAdmin = msgFromAdmin;
      leaveObject.CountedDaysOfTakenLeave = ApplicableLeaveDays;
      leaveObject.addEmployeeEmployeeId = addEmployeeEmployeeId;
      leaveObject.Leave_Reason = Leave_Reason;
      // console.log(
      //   " Leave Reason-----------------unpaid------------",
      //   leaveObject.Leave_Reason
      // );
      //creating the leave instance for this req
      try {
        const leaveInsert = await Leave.create(leaveObject);
        if (!leaveInsert) {
          throw new Error("insert error for leave, Please try again");
        }
        leaveApplicationStatus = "Leave Applcation Submitted for unpaid leaves";
      } catch (error) {
        throw new Error(error.message);
      }
    }

    // chaeck approved dates
    //if leave is approved then employee can see the dates

    res.status(200).json({
      // "days": aDateObject_array,
      // "leaveObject":leaveObject,

      countLeaveDays: ApplicableLeaveDays,
      leaveApplicationStatus: leaveApplicationStatus,
    });
  } catch (error) {
    // console.error(error);
    res.status(400).json({ error: error.message });
    ErrorLogger.error("leaveInsert" + " " + error.message);
  }
};

// adminLeaveControl
module.exports.adminLeaveControl = async (req, res) => {
  try {
    // Get the leave request ID from the request body
    let Leave_Id = req.params.Leave_Id;

    // Find the leave request by its ID
    const leave = await Leave.findOne({
      where: { id: Leave_Id },
    });
    if (!leave) {
      return res.status(404).send("Leave request not found");
    }
    // Update the leave request status to 'approved'
    leave.status = "approved";
    await leave.save();

    res.status(200).send(leave);
  } catch (error) {
    res.status(500).send(error);
    ErrorLogger.error("adminLeaveControl " + " " + error.message);
  }
};

module.exports.applyLeave_1 = async (req, res) => {
  try {
    await arrayHoliday();
    // Get the employee ID, start date, end date, and leave type from the request body
    let Employee_Id = req.body.addEmployeeEmployeeId;
    let startDate = new Date(req.body.startDate);
    let endDate = new Date(req.body.endDate);
    let leaveType = req.body.leaveType;
    // dateArray(startDate,endDate);

    // Check if the employee exists
    const employee = await Add_Employee.findOne({
      where: { Employee_Id },
    });
    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    // Check if the start date is before the end date
    if (moment(startDate).isAfter(moment(endDate))) {
      throw new Error("Start date must be before end date");
    }
    const datearry = dateArray(startDate, endDate);

    //console.log("dekhi ki ase", datearry);

    // calculate the number of days for the leave
    // const start = moment(startDate);
    // const end = moment(endDate);
    // const leaveDays = end.diff(start, 'days') + 1;

    // Check the number of days taken in the month
    // const leavesTakenThisYear = await Leave.count({
    //     where: {
    //         addEmployeeEmployeeId: Employee_Id,
    //         startDate: { [sequelize.Op.between]: [moment().startOf("year"), moment().endOf("year")] }
    //     }
    // });
    // let leavesTakenThisMonth = await Leave.count({
    //     where: {
    //         addEmployeeEmployeeId: Employee_Id,
    //         startDate: { [sequelize.Op.between]: [moment(startDate).startOf("month"), moment(startDate).endOf("month")] }
    //     }
    // });

    // Check the maximum leaves per month based on current month
    let maxLeavesPerMonth;
    let currentMonth = moment().month() + 1; // January = 0, February = 1, etc.
    if (currentMonth >= 1 && currentMonth <= 4) {
      maxLeavesPerMonth = currentMonth;
    } else if (currentMonth >= 5 && currentMonth <= 12) {
      maxLeavesPerMonth = 5;
    } else {
      if (leaveType === "annualLeave") leaveType = "unpaidLeave";
    }

    if (length.datearry > maxLeavesPerMonth) {
    }

    // if  (leavesTakenThisMonth >= maxLeavesPerMonth) {
    //     // if (leaveType === 'annualLeave')

    //         leaveType = 'unpaidLeave' ;

    // //     throw new Error(`this leave request will be considered as unpaid leave`);
    // }
    // else {
    //      leaveType = 'annualLeave';
    // }

    // Check if the leave is within the annual limit
    if (leavesTakenThisYear + leaveDays > 12) {
      if (leaveType === "annualLeave") {
        leaveType = "unpaidLeave";
      }
    }

    // check if the employee has sufficient remaining leaves
    let remainingLeaves = Leave.remainingLeaves;
    if (remainingLeaves < leaveDays) {
      throw new Error("You do not have sufficient remaining leaves");
    }

    // If all the above conditions are satisfied then you can create the leave request
    const leave = await Leave.create({
      addEmployeeEmployeeId: Employee_Id,
      startDate,
      endDate,
      leaveType,
      status: "pending",
    });

    // Update the remaining leaves for the employee
    leave.remainingLeaves -= leaveDays;
    await leave.save();
    res.status(201).send(leave);
  } catch (error) {
    res.status(500).send(error);
  }
};

/////------for gettting leave information of the employee---------------///////

module.exports.getLeaveStatus = async (req, res) => {
  try {
    const Employee_Id = req.params.Employee_Id;

    // get the leave status
    const leaves = await Leave.findAll({
      where: { addEmployeeEmployeeId: Employee_Id },
      attributes: ["startDate", "endDate", "leaveType", "status"],
    });

    res.status(200).send({
      status: "Success",
      message: "Leave status and remaining leaves retrieved successfully",
      data: {
        leaves: leaves,
        remainingLeaves: Leave.remainingLeaves,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error.message,
    });
  }
};
///for getting invidual employee leave situation
(module.exports.getEmployeeLeaves = async (req, res) => {
  try {
    const { Employee_Id } = req.params;
    const leave = await Leave.findAll({
      where: { addEmployeeEmployeeId: Employee_Id },
    });

    return res.status(200).send(leave);
  } catch (error) {
    return res.status(400).send(error);
  }
}),
  ////for getting pending leaves

  (module.exports.getPendingLeaves = async (req, res) => {
    try {
      // Find all leaves with status 'pending'
      const pendingLeaves = await Leave.findAll({
        where: { status: "pending" },
      });

      // Send the pending leaves to the admin
      res.status(200).send(pendingLeaves);
    } catch (error) {
      res.status(500).send(error);
    }
  });

// counting annual leave taken
async function anualleavecount() {
  const leavesTakenThisYear = await Leave.count({
    where: {
      addEmployeeEmployeeId: Employee_Id,
      startDate: {
        [sequelize.Op.between]: [
          moment().startOf("year"),
          moment().endOf("year"),
        ],
      },
    },
  });

  return leavesTakenThisYear;
}

// counting leave per month
async function monthlyleavecount() {
  let leavesTakenThisMonth = await Leave.count({
    where: {
      addEmployeeEmployeeId: Employee_Id,
      startDate: {
        [sequelize.Op.between]: [
          moment(startDate).startOf("month"),
          moment(startDate).endOf("month"),
        ],
      },
    },
  });

  return leavesTakenThisMonth;
}

// get the date name like friday
async function getDaybyname(thisdate) {
  try {
    // Find all leaves with status 'pending
    //console.log("Date this",thisdate);
    let day = thisdate;
    let d = new Date(day);
    var dt = moment(d, "YYYY-MM-DD HH:mm:ss");
    let a = dt.format("dddd");

    // console.log("Friday porse",a);

    // Send the pending leaves to the admin
    //res.status(200).send(a);

    return a;
  } catch (error) {
    // console.log("Error", error.message);
    // res.status(500).send(error);
  }
}

async function holidaynaki(thisdate) {
  const holidays = await Holiday.findAll({
    where: {
      Holiday_Date: thisdate,
    },
  });

  if (!holidays) {
    // console.log("Table data of holiday", holidays);
    return 0;
  } else {
    // console.log("Nai holiday");
    return 1;
  }
}

//holiday checker
async function holidayChecker(dates) {
  for (let i = 0; i < dates.length; i++) {
    try {
      // console.log("Function call-------------------",getDaybyname(dates[i]));

      getDaybyname(dates[i]).then((result) => {
        // console.log("result", result);
        let dayName = result;
        if (dayName === "Friday") {
          dates.splice(i, 1);
          // console.log("Friday porse--------------------------------");

          // console.log("after splice friday", dates);

          //console.log("arry obj friday", dates[i]);
        } else {
          // console.log("$$$");
        }
      });

      holidaynaki(dates[i]).then((result) => {
        let dayName2 = result;
        // console.log("for 1 yes or 0 for no ", dayName2, dates[i]);
        if (dayName2 == 1) {
          dates.splice(i, 1);
          // console.log("Holiday porse--------------------------------");
          // console.log("after splice friday", dates);
        } else {
          // console.log("$$$");
        }
      });

      // console.log("After deduction", dates);
    } catch (error) {
      // console.log(error.message);
    }
  }

  //console.log("After deduction",dates);

  return dates;
}

//converting dates into array
async function dateArray(startDate, endDate) {
  const dates = [];

  //let currentDate = startDate;
  while (startDate <= endDate) {
    // loop through each date between the start and end dates
    dates.push(new Date(startDate)); // add the current date to the array
    startDate.setDate(startDate.getDate() + 1); // move to the next day
  }

  //console.log("datearray",dates); // outputs the array of dates
  const rawleave = holidayChecker(dates);

  //console.log("Raw leaves on my hand",rawleave);

  return rawleave;
}

//for approving leave request
module.exports.approveLeave = async (req, res) => {
  try {
    // Get the leave request ID from the request body
    let Leave_Id = req.body.Leave_Id;

    // Find the leave request by its ID
    const leave = await Leave.findOne({
      where: { Leave_Id: Leave_Id },
    });

    if (!leave) {
      return res.status(404).send("Leave request not found");
    }
    // Update the leave request status to 'approved'
    if (leave.leaveType === "annualLeave") {
      leave.remainingLeaves =
        leave.remainingLeaves - leave.CountedDaysOfTakenLeave;
    }
    leave.status = "approved";
    await leave.save();

    res.status(200).send(leave);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//for decline leave
module.exports.declineLeave = async (req, res) => {
  try {
    const messagead = req.body.msgFromAdmin;
    // Get the leave request's ID from the request body or params
    let Leave_Id = req.body.Leave_Id;
    // Find the leave request by its ID
    const leave = await Leave.findOne({
      where: { Leave_Id: Leave_Id },
    });
    // console.log("leave", leave);

    if (!leave) {
      return res.status(404).send("Leave request not found");
    }
    // Update the leave request's status to 'declined'
    leave.status = "rejected";
    leave.msgFromAdmin = messagead;
    await leave.save();

    res.status(200).send(leave);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/// get all leave
module.exports.allLeaves = async (req, res) => {
  try {
    const leave = await sequelize.query(
      "select l.*, a.Employee_FirstName ,a.Employee_LastName  from leaves l , add_employees a where l.addEmployeeEmployeeId = a.Employee_Id ;",
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send(leave);
    // console.log("paaaiiiiisi", leave);
  } catch (error) {
    ErrorLogger.error("all leave" + " " + error.message);
    res.status(500).send(error);
  }
};

/// get all leave count
module.exports.allLeavecount = async (req, res) => {
  try {
    startDate = new Date();
    endDate = new Date();
    const leave = await sequelize.query(
      "SELECT COUNT(Leave_Id) as leaves FROM Leaves WHERE startDate >= ? AND endDate <= ?;",
      {
        replacements: [startDate, endDate],
        type: sequelize.QueryTypes.SELECT,
      }
    );

    // console.log("The count----------", leave);

    res.status(200).send(leave);
    // console.log("paaaiiiiisi", leave);
  } catch (error) {
    ErrorLogger.error("all leave" + " " + error.message);
    res.status(500).send(error);
  }
};

/// get all pending leave
module.exports.LeaveCount = async (req, res) => {
  try {
    const leaveCount = await Leave.count({ where: { status: "pending" } }).then(
      (leave) => {
        // console.log("leave", leave);
        // if (!task) {
        //     return res.status(404).send('leaveCount not found')
        // }
        res.status(200).send({
          status: "Success",
          message: "Successfully got total leave count",
          leave,
        });
      }
    );
  } catch (error) {
    ErrorLogger.error("Leave" + " " + error.message);
    res.status(400).send({
      status: "fail",
      message: "Couldn't find tasks information",
      error: error.message,
    });
  }
};

/// get all from to date leave
module.exports.fromtodateLeave = async (req, res) => {
  try {
    // console.log("It's here");
    startDate = req.body.startDate;
    endDate = req.body.endDate;
    // console.log("the startDate", startDate, "the endDate", endDate);
    // console.log(
    //   "the startDate from req",
    //   req.body.startDate,
    //   "the endDate from req",
    //   req.body.endDate
    // );
    const leave = await sequelize.query(
      "SELECT * FROM Leaves WHERE endDate BETWEEN ? AND ?;",
      {
        replacements: [startDate, endDate],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send(leave);
    // console.log("paaaiiiiisi", leave);
  } catch (error) {
    ErrorLogger.error("all leave" + " " + error.message);
    res.status(500).send(error);
  }
};

/// get all from to date leave for speccific employee
module.exports.fromtoemployeeLeave = async (req, res) => {
  try {
    // console.log("It's here");
    startDate = req.body.startDate;
    endDate = req.body.endDate;
    id = req.body.id;
    const leave = await sequelize.query(
      "SELECT * FROM Leaves WHERE endDate BETWEEN ? AND ? AND addEmployeeEmployeeId = ?;",
      {
        replacements: [startDate, endDate, id],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send(leave);
    // console.log("paaaiiiiisi", leave);
  } catch (error) {
    ErrorLogger.error("all leave" + " " + error.message);
    res.status(500).send(error);
  }
};
