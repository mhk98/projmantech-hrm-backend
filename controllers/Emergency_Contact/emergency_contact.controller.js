const db = require("../../models")
const Emergency_Contact = db.Emergency_Contact;

//Insert user profile information
module.exports.family_information = async (req, res) => {
    try {
        const family_information = req.body;
        const result = await Emergency_Contact.create(family_information);
        res.status(200).send({
            status: "Success",
            message: "Thank you for successfully added information",
            data: result

        })
    } catch (error) {
        res.status(400).send({
            status: "Success",
            message: "You couldn't add personal information",
            error: error.message
        })
    }
}


//Get single user profile information
module.exports.single_family_information = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Emergency_Contact.findOne({ where: { addEmployeeEmployeeId: id } })
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "This is your information",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No user found",
            error: error.message
        })
    }
}

//User information update
module.exports.family_information_update = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Emergency_Contact.update(req.body, { where: { addEmployeeEmployeeId: id } })

        // console.log("family_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully family information update",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No user found",
            error: error.message
        })
    }
}