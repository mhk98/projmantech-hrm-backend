const db = require("../../db/db")
const Department = db.Department;


// insert Department informatio using post request

module.exports.insertDepartment = async (req, res) => {

    try {
        const department = req.body;
        const result = await Department.create(department)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Department information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Department information not found",
            error: error.message
        })
    }

}



//Get all Department information using get request
module.exports.getAllDepartment = async (req, res) => {
    try {
        const result = await Department.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Department information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Department information not found",
            error: error.message,
        });
    }
};


//Department information delete
module.exports.delete_Department = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('Department Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Department.destroy({ where: { Department_Id: id } })

        // console.log("Department_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Department information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Department found",
            error: error.message
        })
    }
}