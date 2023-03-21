const db = require("../../db/db")
const budgets = db.Budgets;


// insert Budgets informatio using post request

module.exports.insertBudgets = async (req, res) => {

    try {
        const data = req.body;
        const result = await budgets.create(data)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Budgets information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Budgets information not found",
            error: error.message
        })
    }

}



//Get all expense information using get request
module.exports.getAllBudgets = async (req, res) => {
    try {
        const result = await budgets.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Budgets information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Budgets information not found",
            error: error.message,
        });
    }
};


//Budget information delete
module.exports.delete_Budget = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('Budget Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await budgets.destroy({ where: { Budget_Id: id } })

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