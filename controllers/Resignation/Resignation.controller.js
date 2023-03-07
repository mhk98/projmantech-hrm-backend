const db = require('../../models');
const Resignation = db.Resignation;
const Notice = db.Notice;
module.exports.createResignation = async (req, res) => {

    try {
        const {     Resigning_Employee, Notice_Date, Resignation_Date,Reason } = req.body;
        const resignationInfo = {
            Resigning_Employee,
            Notice_Date,
            Resignation_Date,
            Reason
        }
        const insertResignation = await Resignation.create(resignationInfo);
        const noticeInfo = {
            addEmployeeEmployeeId:  Resigning_Employee,
            notice_date: Resignation_Date,
            notice_text: Reason
        }
        const result = await   Notice.create(noticeInfo); 
        //   res.status(200).send({
        //     status: "Success",
        //     message: "You successfully added Resignation information",
        //     data: insertResignation,
        //   });
          res.status(200).send({
            status: "Success",
            message: "You successfully added Notice information",
            data: insertResignation,
          });
    }catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Resignation not found",
            error: error.message
        })
    }
}



//Get all expense information using get request
module.exports.getResignation = async (req, res) => {
    try {
        const result = await Resignation.findAll();

        if (!result) {
            return res.status(400).send('Result not found')
        }
        res.status(200).send({
            status: "Success",
            message: "Resignated Employee Found",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Resignated employee not found",
            error: error.message,
        });
    }
};