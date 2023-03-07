const db = require("../../db/db")
const Designation = db.Designation;


// insert Designation informatio using post request

module.exports.insertDesignation = async (req, res) => {

    try {
        const designation = req.body;
        const result = await Designation.create(designation)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Designation information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Designation information not found",
            error: error.message
        })
    }

}



//Get all Designation information using get request
module.exports.getAllDesignation = async (req, res) => {
    try {
        const result = await Designation.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Designation information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Designation information not found",
            error: error.message,
        });
    }
};


//Designation information delete
module.exports.delete_Designation= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        console.log('Designation Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Designation.destroy({ where: { Designation_Id: id } })

        console.log("Designation_information_update", req.body)
        if (!result) {
      return res.send('Result not found')
            
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Designation information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Designation found",
            error: error.message
        })
    }
}