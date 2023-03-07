const db = require("../../models")
const Personal_Information = db.Personal_Information

//Insert user profile information
// module.exports.personal_information = async (req, res) => {
//     try {
//         const personal_information = req.body;
//         const result = await Personal_Information.create(personal_information);
//         res.status(200).send({
//             status: "Success",
//             message: "Thank you for successfully added information",
//             data: result

//         })
//     } catch (error) {
//         res.status(400).send({
//             status: "Success",
//             message: "You couldn't add personal information",
//             error: error.message
//         })
//     }
// }


//Get single user profile information
module.exports.single_personal_information = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Personal_Information.findOne({ where: { Employee_Id: id } })
        if (!result) {
            return res.status(400).send('Result not found')

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
module.exports.personal_information_update = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send('Id not found')

        }
        const result = await Personal_Information.update(req.body, { where: { Employee_Id: id } })

        console.log("personal_information_update", req.body)
        // if (!result) {
        //     return res.status(401).send({
        //         status: 'fail',
        //         message: 'No user information found'
        //     })
        // }

        res.status(200).send({
            status: "Success",
            message: "Successfully user information update",
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