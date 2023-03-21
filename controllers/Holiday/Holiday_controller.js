const db = require("../../db/db")
const Holiday = db.Holiday;


// insert Holiday informatio using post request

module.exports.insertHoliday = async (req, res) => {

    try {
        const holiday = req.body;
        const result = await Holiday.create(holiday)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Holiday information insert",
            data: result
        })
    } catch (error) {
        ErrorLogger.error("insertHoliday" + " " + error.message);

        res.status(400).send({
            status: "Fail",
            message: "Holiday information not found",
            error: error.message
        })
    }

}



//Get all Holiday information using get request
module.exports.getAllHoliday = async (req, res) => {
    try {
        const result = await Holiday.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Holiday information",
            data: result,
        });
    } catch (error) {
        ErrorLogger.error("getAllHoliday" + " " + error.message);
        res.status(400).send({
            status: "fail",
            message: "Holiday information not found",
            error: error.message,
        });
    }
};


//Holiday information delete
module.exports.delete_Holiday= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        // console.log('Holiday Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Holiday.destroy({ where: { Holiday_Id: id } })

        // console.log("Holiday_information_update", req.body)
        if (!result) {
            return res.status(401).send({
                status: 'fail',
                message: 'No Holiday information found'
            })
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Holiday information delete",
            data: result
        })
    } catch (error) {
        ErrorLogger.error(req.originalUrl + " " + error.message);

        res.status(400).send({
            status: "fail",
            message: "No Holiday found",
            error: error.message
        })
    }
}