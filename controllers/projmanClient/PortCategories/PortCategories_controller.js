const db = require("../../../db/db")
const portCategories = db.PortCategories;


// insert PortCategories informatio using post request

module.exports.insertPortCategories = async (req, res) => {

    try {
        const PortCategories = req.body;
        const result = await portCategories.create(PortCategories)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully PortCategories information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "PortCategories information not found",
            error: error.message
        })
    }

}



//Get all PortCategories information using get request
module.exports.getAllPortCategories = async (req, res) => {
    try {
        const result = await portCategories.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All PortCategories information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "PortCategories information not found",
            error: error.message,
        });
    }
};


//PortCategories information delete
module.exports.delete_PortCategories = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('PortCategories Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await portCategories.destroy({ where: { Category_Id: id } })

        // console.log("PortCategories_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully PortCategories information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No PortCategories found",
            error: error.message
        })
    }
}