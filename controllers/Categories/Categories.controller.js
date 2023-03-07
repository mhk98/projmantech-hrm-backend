const db = require("../../db/db")
const categories = db.Categories;
const { customerLogger, ErrorLogger } = require("../../utils/logger");



// insert categories informatio using post request

module.exports.insertCategories = async (req, res) => {

    try {
        const catego = req.body;
        const result = await categories.create(catego)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully categories information insert",
            data: result
        })
    } catch (error) {
        ErrorLogger.error(req.originalUrl + " " + error.message);

        res.status(400).send({
            status: "Fail",
            message: "Categories information not found",
            error: error.message
        })
    }

}



//Get all categories information using get request
module.exports.getAllCategories = async (req, res) => {
    try {
        const result = await categories.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All categories information",
            data: result,
        });
    } catch (error) {
        ErrorLogger.error("getAllCategories" + " " + error.message);
        res.status(400).send({
            status: "fail",
            message: "Categories information not found",
            error: error.message,
        });
    }
};

//Categories information delete
module.exports.delete_Categories = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        console.log('Categories Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await categories.destroy({ where: { Category_Id: id } })

        console.log("Categories_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Categories information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Categories found",
            error: error.message
        })
    }
}