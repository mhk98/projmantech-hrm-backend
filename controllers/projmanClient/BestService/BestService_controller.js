const db = require("../../../models");
const BestService = db.BestService;


// insert BestService informatio using post request

module.exports.insertBestService = async (req, res) => {

    try {
        // const BestServiceInfo = req.body;
        const { Title, Content } = req.body
        let data = {
            Title,
            Content,
            Img: req.file.path
        }
        const result = await BestService.create(data)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully BestService information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "BestService information not found",
            error: error.message
        })
    }

}

// Update BestService

module.exports.updateBestService = async (req, res) => {
    try {
        const { id } = req.params;
        const isthere = await BestService.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await BestService.update(req.body, {
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



//Get all BestService information using get request
module.exports.getAllBestService = async (req, res) => {
    try {
        const result = await BestService.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All BestService information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "BestService information not found",
            error: error.message,
        });
    }
};


//BestService information delete
module.exports.delete_BestService = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        console.log('BestService Id here', id)

        const isthere = await BestService.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await BestService.destroy({ where: { Content_Id: id } })

        console.log("BestService_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully BestService information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No BestService found",
            error: error.message
        })
    }
}

