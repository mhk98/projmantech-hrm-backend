const db = require("../../../models");
const PortService = db.PortService;

const { ErrorLogger, customerLogger } = require("../../../utils/logger");
// insert PortService informatio using post request

module.exports.insertPortService = async (req, res) => {

    try {
        // const PortServiceInfo = req.body;
        // console.log('PortServiceInfo',PortServiceInfo);
        const { Category, Title, Content, SiteURL } = req.body
        let data = {
            Category,
            Title,
            Content,
            SiteURL,
            Img: req.file.path
        }
        const result = await PortService.create(data)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully PortService information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "PortService information not found",
            error: error.message
        })
    }

}

// Update PortService

module.exports.updatePortService = async (req, res) => {
    try {
        const { id } = req.params;
        const isthere = await PortService.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await PortService.update(req.body, {
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



//Get all PortService information using get request
module.exports.getAllPortService = async (req, res) => {
    try {
        const result = await PortService.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All PortService information",
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
//Get one PortService information using get request
module.exports.getOnePortService = async (req, res) => {
    try {

        const { id } = req.params;
        // console.log(" title ", id);
        const result = await PortService.findAll({ where: { Content_Id: id } });

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


//PortService information delete
module.exports.delete_PortService = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('PortService Id here', id)

        const isthere = await PortService.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await PortService.destroy({ where: { Content_Id: id } })

        // console.log("PortService_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully PortService information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No PortService found",
            error: error.message
        })
    }
}

//our portfolio category wise
module.exports.categorywise = async (req, res) => {
    try {

        const { category } = req.params;
        if( category === 'All' || category === 'all'){

            const result = await PortService.findAll();
            res.status(200).send(result);

        }
        else{
        const Cat = await PortService.findAll({ where: { Category: category } });
        res.status(200).send(Cat);
        }
    } catch (error) {
        ErrorLogger.error("allOngoingTasks" + " " + error.message);
        res.status(500).send(error);
    }
};

