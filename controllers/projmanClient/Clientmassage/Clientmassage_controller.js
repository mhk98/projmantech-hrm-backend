const { sendMail } = require("../../../middlewares/nodemailer");
const nodemailer = require("../../../middlewares/nodemailer");
const db = require("../../../models");
const Clientmassage = db.Clientmassage;


// insert Clientmassage informatio using post request

module.exports.insertClientmassage = async (req, res) => {

    sendMail(
        req.body.Email,
        req.body.Client_Name,
        req.body.Subject,
        req.body.Massage
    )

    try {
        const ClientmassageInfo = req.body;
        console.log('ClientInfo', req.body)
        const result = await Clientmassage.create(ClientmassageInfo)
        if (!result) {
            return res.send('Result not found')

        }





        res.status(200).send({
            status: "Success",
            message: "Successfully Clientmassage information insert",
            data: result


        })



    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Clientmassage information not found",
            error: error.message
        })
    }

}

// Update Clientmassage

module.exports.updateClientmassage = async (req, res) => {
    try {
        const { id } = req.params;
        const isthere = await Clientmassage.findAll({ where: { Massage_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Clientmassage.update(req.body, {
            where: { Massage_Id: id }
        });
        res.status(200).send({
            status: "Success",
            message: "Successfully update employee information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Couldn't update employee information",
            error: error.message,
        });
        ErrorLogger.error("updateEmployeeInformation" + " " + error.message);
    }
};



//Get all Clientmassage information using get request
module.exports.getAllClientmassage = async (req, res) => {
    try {
        const result = await Clientmassage.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Clientmassage information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Clientmassage information not found",
            error: error.message,
        });
    }
};


//Clientmassage information delete
module.exports.delete_Clientmassage = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        console.log('Clientmassage Id here', id)

        const isthere = await Clientmassage.findAll({ where: { Massage_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Clientmassage.destroy({ where: { Massage_Id: id } })

        console.log("Clientmassage_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Clientmassage information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Clientmassage found",
            error: error.message
        })
    }
}

