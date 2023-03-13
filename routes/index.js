const router = require("express").Router();
const user = require("./users");
const { roundToNearestMinutesWithOptions } = require("date-fns/fp");
const Add_Employee = require("./Add_Employee");
const Personal_Information = require("./Personal_Information");
const Family_Information = require("./Emergency_Contact");
const Attendance = require("./Attendance");
const Projects = require("./PMT_Projects");
const Leaves = require("./Leaves");
const Notice = require("./Notice");
const Client = require("./PMT_Clients");
const Profile_Information = require("./Profile_Information");
const Estimates = require("./Estimates");
const Employee_BankInfo = require("./Employee_BankInfo");
const Education_Informations = require("./Education_Informations");
const Invoices = require("./Invoices");
const Payment = require("./Payment");
const Expenses = require("./Expenses");
const Taxes = require("./Taxes");
const Categories = require("./Categories");
const Budgets = require("./Budgets");
const Budget_Expenses = require("./Budget_Expenses");
const Budget_Revenue = require("./Budget_Revenue");
const Holiday = require("./Holiday");
const Asset = require("./Asset");
const WorkForce = require("./WorkForce");
const Department = require("./Department");
const Designation = require("./Designation");

/// client site

const Aboutus = require("./projmanClient/Aboutus");
const Bestfeature = require("./projmanClient/Bestfeature");
const BestService = require("./projmanClient/BestService");
const Exclusive = require("./projmanClient/Exclusive");
const ExService = require("./projmanClient/ExService");
const Portfolio = require("./projmanClient/Portfolio");
const PortService = require("./projmanClient/PortService");
const Contact = require("./projmanClient/Contact");
const Countof = require("./projmanClient/Countof");
const Clientmassage = require("./projmanClient/Clientmassage");
const Slide = require("./projmanClient/Slide");
const PortCategories = require("./projmanClient/PortCategories");
const OurClient = require("./projmanClient/OurClient");
const Job = require("./Job");

///////////////////////////////////

const Task = require("./Task");
const Promotion = require("./Promotion");
const Temination = require("./Termination");
const Resignation = require("./Resignation");
const Payslip = require("./Payslip");
const Deduction = require("./Deduction");
const Employee_Salary = require("./Employee_Salary");
const Items = require("./Items");
const { route } = require("./users");

router.use("/user", user);
router.use("/add_employee", Add_Employee);
router.use("/profile_information", Profile_Information);
router.use("/personal_information", Personal_Information);
router.use("/bankinfo", Employee_BankInfo);
router.use("/educationinfo", Education_Informations);
router.use("/estimates", Estimates);
router.use("/items", Items);
router.use("/invoices", Invoices);
router.use("/payment", Payment);
router.use("/expenses", Expenses);
router.use("/taxes", Taxes);
router.use("/categories", Categories);
router.use("/budgets", Budgets);
router.use("/budget_expenses", Budget_Expenses);
router.use("/budget_revenue", Budget_Revenue);
router.use("/emergency_contact", Family_Information);
router.use("/attendance", Attendance);
router.use("/pmt_projects", Projects);
router.use("/notice", Notice);
router.use("/Leaves", Leaves);
router.use("/Task", Task);
router.use("/Promotion", Promotion);
router.use("/holiday", Holiday);
router.use("/asset", Asset);

// client site

router.use("/projnamClient/aboutus", Aboutus);
router.use("/projnamClient/bestfeature", Bestfeature);
router.use("/projnamClient/bestService", BestService);
router.use("/projnamClient/exclusive", Exclusive);
router.use("/projnamClient/exService", ExService);
router.use("/projnamClient/portfolio", Portfolio);
router.use("/projnamClient/portservice", PortService);
router.use("/projnamClient/contact", Contact);
router.use("/projnamClient/countof", Countof);
router.use("/projnamClient/clientmassage", Clientmassage);
router.use("/projnamClient/slide", Slide);
router.use("/projnamClient/portCategories", PortCategories);
router.use("/projnamClient/ourclient", OurClient);
router.use("/jobs", Job);

//////////////////////////////////////////////

router.use("/Termination", Temination);
router.use("/Payslip", Payslip);
router.use("/Deduction", Deduction);
router.use("/salary", Employee_Salary);
router.use("/Resignation", Resignation);
router.use("/PMT_Clients", Client);
router.use("/WorkForce", WorkForce);
router.use("/Department", Department);
router.use("/Designation", Designation);
router.use("/Employee_Salary", Employee_Salary);
module.exports = router;
