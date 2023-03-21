// import connection of sequelizeconsole
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

db.sequelize
  .sync({ force: false })
  .then(() => {
    // console.log("Connection re-synced");
  })
  .catch((err) => {
    // console.log("Error on re-synced", err);
  });

// eslint-disable-next-line @typescript-eslint/no-var-requires
db.user = require("../models/users/user")(db.sequelize, DataTypes);
// db.add_employee = require("../models/Add_Employee/add_employee")(db.sequelize, DataTypes);

db.Attendance = require("../models/Attendance/Attendance")(
  db.sequelize,
  DataTypes
);
db.Profile_Information =
  require("../models/Profile_Information/Profile_Information")(
    db.sequelize,
    DataTypes
  );

db.Holiday = require("../models/Holiday/Holiday")(db.sequelize, DataTypes);

db.Department = require("../models/Department/Department")(
  db.sequelize,
  DataTypes
);

db.Designation = require("../models/Designation/Designation")(
  db.sequelize,
  DataTypes
);

db.WorkForce = require("../models/WorkForce/WorkForce")(
  db.sequelize,
  DataTypes
);

db.PMT_Projects = require("../models/PMT_Projects/PMT_Projects")(
  db.sequelize,
  DataTypes
);
db.Leaves = require("../models/Leaves/Leaves")(db.sequelize, DataTypes);
db.Budget_Expenses = require("../models/Budget_Expenses/Budget_Expenses")(
  db.sequelize,
  DataTypes
);
db.Budget_Revenue = require("../models/Budget_Revenue/Budget_Revenue")(
  db.sequelize,
  DataTypes
);
db.Budgets = require("../models/Budgets/Budgets")(db.sequelize, DataTypes);
db.Categories = require("../models/Categories/Categories")(
  db.sequelize,
  DataTypes
);
db.Deduction = require("../models/Deduction/Deduction")(
  db.sequelize,
  DataTypes
);
db.Employee_Provident_Fund =
  require("../models/Employee_ Provident_Fund/Employee_ Provident_Fund")(
    db.sequelize,
    DataTypes
  );
// db.Employee_Academic_Experience =
//   require("../models/Employee_Academic_Experience/Employee_Academic_Experience")(
//     db.sequelize,
//     DataTypes
//   );
db.Employee_BankInfo = require("../models/Employee_BankInfo/Employee_BankInfo")(
  db.sequelize,
  DataTypes
);

// db.Employee_Leaves = require("../models/Employee_Leaves/Employee_Leaves")(
//   db.sequelize,
//   DataTypes
// );

db.Employee_Salary = require("../models/Employee_Salary/Employee_Salary")(
  db.sequelize,
  DataTypes
);
db.Estimates = require("../models/Estimates/Estimates")(
  db.sequelize,
  DataTypes
);
db.Invoices = require("../models/Invoices/Invoices")(db.sequelize, DataTypes);
db.Expenses = require("../models/Expenses/Expenses")(db.sequelize, DataTypes);
// db.Goals = require("../models/Goals/Goals")(db.sequelize, DataTypes);
db.Promotion = require("../models/Promotion/Promotion")(
  db.sequelize,
  DataTypes
);
db.Resignation = require("../models/Resignation/Resignation")(
  db.sequelize,
  DataTypes
);
db.Termination = require("../models/Termination/Termination")(
  db.sequelize,
  DataTypes
);
db.Items = require("../models/Items/Items")(db.sequelize, DataTypes);
db.Overtime = require("../models/Overtime/Overtime")(db.sequelize, DataTypes);
db.Payments = require("../models/Payments/Payments")(db.sequelize, DataTypes);
db.Payslip = require("../models/Payslip/Payslip")(db.sequelize, DataTypes);
db.PMT_Clients = require("../models/PMT_Clients/PMT_Clients")(
  db.sequelize,
  DataTypes
);
db.Policies = require("../models/Policies/Policies")(db.sequelize, DataTypes);
db.Taxes = require("../models/Taxes/Taxes")(db.sequelize, DataTypes);
db.Personal_Information =
  require("../models/Personal_Information/Personal_Information")(
    db.sequelize,
    DataTypes
  );
db.Emergency_Contact = require("../models/Emergency_Contact/Emergency_Contact")(
  db.sequelize,
  DataTypes
);
db.Education_Informations =
  require("../models/Education_Informations/Education_Informations")(
    db.sequelize,
    DataTypes
  );
db.add_employee = require("../models/Add_Employee/add_employee")(
  db.sequelize,
  DataTypes
);
db.Notice = require("../models/Notice/Notice")(db.sequelize, DataTypes);
db.Task = require("../models/Task/Task")(db.sequelize, DataTypes);
db.Promotion = require("../models/Promotion/Promotion")(
  db.sequelize,
  DataTypes
);
db.Resignation = require("../models/Resignation/Resignation")(
  db.sequelize,
  DataTypes
);
db.Termination = require("../models/Termination/Termination")(
  db.sequelize,
  DataTypes
);

// cient site contents

db.Aboutus = require("./projmanClient/Aboutus/Aboutus")(
  db.sequelize,
  DataTypes
);
db.Bestfeature = require("./projmanClient/Bestfeature/Bestfeature")(
  db.sequelize,
  DataTypes
);
db.BestService = require("./projmanClient/BestService/BestService")(
  db.sequelize,
  DataTypes
);
db.Clientmassage = require("./projmanClient/Clientmassage/Clientmassage")(
  db.sequelize,
  DataTypes
);
db.Contact = require("./projmanClient/Contact/Contact")(
  db.sequelize,
  DataTypes
);
db.Countof = require("./projmanClient/Countof/Countof")(
  db.sequelize,
  DataTypes
);
db.Exclusive = require("./projmanClient/Exclusive/Exclusive")(
  db.sequelize,
  DataTypes
);
db.ExService = require("./projmanClient/ExService/ExService")(
  db.sequelize,
  DataTypes
);
db.Portfolio = require("./projmanClient/Portfolio/Portfolio")(
  db.sequelize,
  DataTypes
);
db.PortService = require("./projmanClient/PortService/PortService")(
  db.sequelize,
  DataTypes
);
db.Slide = require("./projmanClient/Slide/Slide")(db.sequelize, DataTypes);
db.PortCategories = require("./projmanClient/PortCategories/PortCategories")(
  db.sequelize,
  DataTypes
);
db.OurClient = require("./projmanClient/OurClient/OurClient")(
  db.sequelize,
  DataTypes
);
db.Job = require("./Job/Job")(db.sequelize, DataTypes);

//////////////////////////////////

// db.Experience_Informations = require("../models/Experience_Informations/Experience_Informations")(db.sequelize, DataTypes);

// eslint-disable-next-line @typescript-eslint/no-var-requires
// db.Hotel = require('../models/hotel/hotel')(db.sequelize, DataTypes);
// db.recharge = require('../models/recharge/recharge')(db.sequelize, DataTypes);
// db.lost_history = require('../models/lost_history/lost_history')(
//   db.sequelize,
//   DataTypes,
// );

// db.add_employee.hasMany(db.Experience_Informations, { foreignkey: 'Employee_Id' });
// db.Experience_Informations.belongsTo(db.add_employee, { foreignkey: 'Employee_Id' });

db.add_employee.hasMany(db.Education_Informations, {
  foreignkey: "Employee_Id",
});
db.Education_Informations.belongsTo(db.add_employee, {
  foreignkey: "Employee_Id",
});

// db.add_employee.hasMany(db.Personal_Information, { foreignkey: "Employee_Id" });
// db.Personal_Information.belongsTo(db.add_employee, {
//   foreignkey: "Employee_Id",
// });

db.add_employee.hasMany(db.Emergency_Contact, { foreignkey: "Employee_Id" });
db.Emergency_Contact.belongsTo(db.add_employee, { foreignkey: "Employee_Id" });

db.add_employee.hasMany(db.Leaves, { foreignkey: "Employee_Id" });
db.Leaves.belongsTo(db.add_employee, { foreignkey: "Employee_Id" });

// db.add_employee.hasMany(db.Notice, { foreignkey: "Employee_Id" });
// db.Notice.belongsTo(db.add_employee, { foreignkey: "Employee_Id" });

// db.add_employee.hasMany(db.Task, { foreignkey: "Employee_Id" });
// db.Task.belongsTo(db.add_employee, { foreignkey: "Employee_Id" });

db.PMT_Projects.hasMany(db.Task, { foreignkey: "Project_Id" });
db.Task.belongsTo(db.PMT_Projects, { foreignkey: "Project_Id" });

db.PMT_Clients.hasMany(db.PMT_Projects, { foreignkey: "Client_Id" });
db.PMT_Projects.belongsTo(db.PMT_Clients, { foreignkey: "Client_Id" });

// db.PMT_Projects.hasMany(db.Estimates, { foreignkey: 'Project_ID' });
// db.Estimates.belongsTo(db.PMT_Projects, { foreignkey: 'Project_ID' });

db.PMT_Projects.hasMany(db.Budgets, { foreignkey: "Project_ID" });
db.Budgets.belongsTo(db.PMT_Projects, { foreignkey: "Project_ID" });

db.PMT_Projects.hasMany(db.Invoices, { foreignkey: "Project_ID" });
db.Invoices.belongsTo(db.PMT_Projects, { foreignkey: "Project_ID" });

db.Estimates.hasMany(db.Items, { foreignkey: "Estimate_Id" });
db.Items.belongsTo(db.Estimates, { foreignkey: "Estimate_Id" });

db.Invoices.hasMany(db.Items, { foreignkey: "Invoice_Id" });
db.Items.belongsTo(db.Invoices, { foreignkey: "Invoice_Id" });

db.add_employee.hasOne(db.Payslip, { foreignkey: "Employee_Id" });
db.Payslip.belongsTo(db.add_employee, { foreignkey: "Employee_Id" });

// db.add_employee.hasOne(db.Profile_Information, { foreignkey: "Employee_Id" });
// db.Profile_Information.belongsTo(db.add_employee, {
//   foreignkey: "Employee_Id",
// });

// db.add_employee.hasMany(db.Deduction, { foreignkey: 'Employee_Id' });
// db.Deduction.belongsTo(db.add_employee, { foreignkey: 'Employee_Id' });

db.add_employee.hasMany(db.Attendance, { foreignkey: "Employee_Id" });
db.Attendance.belongsTo(db.add_employee, { foreignkey: "Employee_Id" });

// db.add_employee.hasMany(db.Employee_Salary, { foreignkey: 'Employee_Id' });
// db.Employee_Salary.belongsTo(db.add_employee, { foreignkey: 'Employee_Id' });

// db.add_employee.hasMany(db.Employee_Leaves, { foreignkey: 'Employee_Id' });
// db.Employee_Leaves.belongsTo(db.add_employee, { foreignkey: 'Employee_Id' });
// // export
module.exports = db;
