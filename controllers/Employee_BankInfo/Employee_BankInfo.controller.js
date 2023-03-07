const db = require("../../models")
const Employee_BankInfo = db.Employee_BankInfo


//Get single user Employee Bank Informations
module.exports.get_single_Bank_Informations = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Employee_BankInfo.findOne({ where: { Employee_Id: id } })
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "This is your information",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Employee_BankInfo found",
            error: error.message
        })
    }
}

//Employee education information update
module.exports.update_Employee_Bank_information = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Employee_BankInfo.update(req.body, { where: { Employee_Id: id } })


        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Employee_BankInfo update",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Employee_BankInfo found",
            error: error.message
        })
    }
}