const db = require("../../../models");
const ExService = db.ExService;


// insert ExService informatio using post request

module.exports.insertExService = async (req, res) => {

    try {
        // const ExServiceInfo = req.body;
        const { Title, Content } = req.body
        let data = {
            Title,
            Content,
            Img: req.file.path
        }
        const result = await ExService.create(data)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully ExService information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "ExService information not found",
            error: error.message
        })
    }

}

// Update ExService

module.exports.updateExService = async (req, res) => {
    try {
        const { id } = req.params;
        const isthere = await ExService.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await ExService.update(req.body, {
            where: { Content_Id: id },
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



//Get all ExService information using get request
module.exports.getAllExService = async (req, res) => {
    try {
        const result = await ExService.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All ExService information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "ExService information not found",
            error: error.message,
        });
    }
};


//Get one ExService information using get request
module.exports.getOneExService = async (req, res) => {
    try {

        const { id } = req.params;
        // console.log(" title ", id);
        const result = await ExService.findAll({ where: { Content_Id: id } });

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "PortService information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "PortService information not found",
            error: error.message,
        });
    }
};



//ExService information delete
module.exports.delete_ExService = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('ExService Id here', id)

        const isthere = await ExService.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await ExService.destroy({ where: { Content_Id: id } })

        // console.log("ExService_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully ExService information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No ExService found",
            error: error.message
        })
    }
}

