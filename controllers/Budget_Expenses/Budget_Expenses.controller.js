const db = require("../../db/db")
const budget_Expenses = db.Budget_Expenses;


module.exports.insert_Budgets_Expenses = async (req, res) => {

    try {
        const budgets_expenses = req.body;
        const result = await budget_Expenses.create(budgets_expenses)
        if (!result) {
            res.status(400).send({
                status: "Fail",
                message: "Budget_Expenses information not found"
            })
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Budget_Expenses information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Budget_Expenses information not found",
            error: error.message
        })
    }

}



//Get all expense information using get request
module.exports.get_AllBudget_Expenses = async (req, res) => {
    try {
        const result = await budget_Expenses.findAll();

        if (!result) {
            res.status(200).send({
                status: "Fail",
                message: "Budget_Expenses information not found",
            });
        }
        res.status(200).send({
            status: "Success",
            message: "All Budget_Expenses information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Budget_Expenses information not found",
            error: error.message,
        });
    }
};

//Budget information delete
module.exports.delete_Budget_Expense= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        // console.log('Budget Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await budget_Expenses.destroy({ where: { Expense_Id: id } })

        // console.log("Budget_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Budget information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Budget found",
            error: error.message
        })
    }
}