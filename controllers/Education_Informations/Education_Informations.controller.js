const db = require("../../models")
const Education_Informations = db.Education_Informations;
const { customerLogger, ErrorLogger } = require("../../utils/logger");


//Insert employee education information
module.exports.insert_Educaion_Information = async (req, res) => {
    const { id } = req.params
    const { Subject, Starting_Date, Complete_Date, Degree, Institution } = req.body;
    console.log(req.body)
    let body = {
        Subject, Starting_Date, Complete_Date, Degree, Institution,
        addEmployeeEmployeeId: id
    }
    try {
        const education = req.body;
        const result = await Education_Informations.create(body);
        res.status(200).send({
            status: "Success",
            message: "Thank you for successfully added education information",
            data: result

        })
    } catch (error) {
        ErrorLogger.error("insert_Educaion_Information" + " " + error.message);
        res.status(400).send({
            status: "Success",
            message: "You couldn't add education information",
            error: error.message
        })
    }
}


//get all education information for individual employee
module.exports.get_All_Education_info = async (req, res) => {
    try {
        const { employeeId } = req.params;

        console.log('employee and education Id here', employeeId)

        if (!employeeId) {
            return res.send('employeeId not found')

        }
        const result = await Education_Informations.findAll({ where: { addEmployeeEmployeeId: employeeId } })

        // console.log("education_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully found employee education information",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "No employee  education information found",
            error: error.message
        })
        ErrorLogger.error("createDeduction " + " " + error.message);

    }

}


//Employee education information update
module.exports.update_Education_information = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { educationId } = req.params;
        console.log('employee and education Id here', employeeId, educationId)

        if (!employeeId && !educationId) {
            return res.send('EmployeeId or EducationId not found')

        }
        const result = await Education_Informations.update(req.body, { where: { addEmployeeEmployeeId: employeeId, Education_Id: educationId } })

        // console.log("education_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully employee education information update",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No employee  education information found",
            error: error.message
        })
        ErrorLogger.error("update_Education_information " + " " + error.message);
    }
}


//Employee education information delete
module.exports.delete_Education_Information = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { educationId } = req.params;
        console.log('employee and education Id here', employeeId, educationId)

        if (!employeeId && !educationId) {
            return res.send('EmployeeId or EducationId not found')

        }
        const result = await Education_Informations.destroy({ where: { addEmployeeEmployeeId: employeeId, Education_Id: educationId } })

        console.log("education_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully employee education information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No employee  education information found",
            error: error.message
        })
        ErrorLogger.error(req.originalUrl + " " + error.message);
    }
}