const db = require("../../models")
const Estimates = db.Estimates;
const Items = db.Items;

// insert estimates informatio using post request

module.exports.insertEstimates = async (req, res) => {

    try {
        const estimates = req.body;
        // console.log('estimates', estimates)
        const result = await Estimates.create(estimates)
        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "Successfully estimates information insert",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Estimates information not found",
            error: error.message
        })
    }
}


// update estimates informatio using put request
module.exports.updateEstimates = async (req, res) => {

    try {
        const estimates = req.body;
        const { id } = req.params;
        // console.log('estimates', estimates)
        // console.log('estimate id', id)
        const result = await Estimates.update(estimates, {
            where: { Estimate_Id: id }
        })
        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "Successfully estimates information updatep",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Estimates information not found",
            error: error.message
        })
    }
}
// update estimates informatio using put request
module.exports.deleteEstimates = async (req, res) => {

    try {
        const estimates = req.body;
        const { id } = req.params;
        // console.log('estimates', estimates)
        const result = await Estimates.destroy({
            where: { Estimate_Id: id }
        })
        if (!result) {
            return res.send('Result not found')

        }
        const delitem = await Items.destroy({
            where: { Estimate_Id: id }
        })
        res.status(200).send({
            status: "Success",
            message: "Successfully estimates information delete",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Estimates information not found",
            error: error.message
        })
    }
}

//get all estimates information using get request

//All employee information here
module.exports.getAllEstimates = async (req, res) => {
    try {
        const result = await Estimates.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All estimates information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Estimates information not found",
            error: error.message,
        });
    }
};