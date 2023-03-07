const db = require("../../db/db")
const Expenses = db.Expenses;


// insert expenses informatio using post request

module.exports.insertExpenses = async (req, res) => {

    try {
        const expenses = req.body;
        const result = await Expenses.create(expenses)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Expense information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Expenses information not found",
            error: error.message
        })
    }

}



//Get all expense information using get request
module.exports.getAllExpense = async (req, res) => {
    try {
        const result = await Expenses.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All expense information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Expense information not found",
            error: error.message,
        });
    }
};



//Expense education information update
module.exports.updateExpense = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Expenses.update(req.body, { where: { Item_Id: id } })


        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Expense update",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Expense info found",
            error: error.message
        })
    }
}
//Expense information delete
module.exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Expenses.destroy({ where: { Item_Id: id } })


        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Expense update",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Expense found",
            error: error.message
        })
    }
}