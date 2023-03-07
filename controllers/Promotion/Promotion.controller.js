const db = require('../../models');
const Promotion = db.Promotion;
const Notice = db.Notice;
module.exports.createPromotion = async (req, res) => {

    try {
        const {   Promoted_Employee, Promoted_From,  Promoted_to, Promotion_Date, Status } = req.body;
        const promotion = await Promotion.create({  
            Promoted_Employee,
            Promoted_From,
            Promoted_to,
            Promotion_Date,
            Status
        });
        const noticeInfo = {
            addEmployeeEmployeeId: Promoted_Employee,
            notice_date: Promotion_Date,
            notice_text: Status
        }
        const result = await   Notice.create(noticeInfo); 
          res.status(200).send({
            status: "Success",
            message: "You successfully added Teminated information",
            data: promotion,
          });
    }catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "promotion not found",
            error: error.message
        })
    }
}



//Get all expense information using get request
module.exports.getPromotion = async (req, res) => {
    try {
        const result = await Promotion.findAll();

        if (!result) {
            return res.status(400).send('Result not found')
        }
        res.status(200).send({
            status: "Success",
            message: "emlployee promoted successfully",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "promoted employee not found",
            error: error.message,
        });
    }
};