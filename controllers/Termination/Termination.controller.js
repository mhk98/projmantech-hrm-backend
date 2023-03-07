const db = require('../../models');
const Termination = db.Termination;
const Notice = db.Notice;
module.exports.createTermination = async (req, res) => {

    try {
        const { Terminated_Employee, Notice_Date,Termination_Date, Termination_Type,Reason } = req.body;
        const termination = await Termination.create({  
            Terminated_Employee,
            Notice_Date,
            Termination_Date,
            Termination_Type,
            Reason
        });

        
        const noticeInfo = {
            addEmployeeEmployeeId:  Terminated_Employee,
            notice_date: Notice_Date,
            notice_text: Reason
        }
        const result = await   Notice.create(noticeInfo); 
          res.status(200).send({
            status: "Success",
            message: "You successfully added Teminated information",
            data: termination,
          });
    }catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Termination not found",
            error: error.message
        })
    }
}



//Get all expense information using get request
module.exports.getTermination = async (req, res) => {
    try {
        const result = await Termination.findAll();

        if (!result) {
            return res.status(400).send('Terminated  Employee Not foun')
        }
        res.status(200).send({
            status: "Success",
            message: "emlployee Terminated",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Terminated employee not found",
            error: error.message,
        });
    }
};