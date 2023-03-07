const db = require("../../db/db")
const budget_Revenues = db.Budget_Revenue;


module.exports.insert_Budget_Revenue = async (req, res) => {

    try {
        const budget_revenue = req.body;
        const result = await budget_Revenues.create(budget_revenue)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Budget_Revenue information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Budget_Revenue information not found",
            error: error.message
        })
    }

}



//Get all Budget_Revenue information using get request
module.exports.get_AllBudget_Revenue = async (req, res) => {
    try {
        const result = await budget_Revenues.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Budget_Revenue information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Budget_Revenue information not found",
            error: error.message,
        });
    }
};

//Budget information delete
module.exports.delete_Budget_Revenue= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        console.log('Budget Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await budget_Revenues.destroy({ where: { Revenue_Id: id } })

        console.log("Budget_information_update", req.body)
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