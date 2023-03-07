const db = require("../../models");
const Taxes = db.Taxes;


// insert taxes informatio using post request

module.exports.insertTaxes = async (req, res) => {

    try {
        const taxes = req.body;
        const result = await Taxes.create(taxes)
        if (!result) {
            return res.status(400).send('Taxe information not found')
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully taxe information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Taxe information not found",
            error: error.message
        })
    }

}



//Get all taxes information using get request
module.exports.getAllTaxes = async (req, res) => {
    try {
        const result = await Taxes.findAll();

        if (!result) {
            return res.status(400).send('Taxe information not found')
        }
        res.status(200).send({
            status: "Success",
            message: "All taxe information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Taxe information not found",
            error: error.message,
        });
    }
};


//Expense information delete
module.exports.deleteTaxes = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Taxes.destroy({ where: { Taxes_Id: id } })


        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Taxes update",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Taxes found",
            error: error.message
        })
    }
}