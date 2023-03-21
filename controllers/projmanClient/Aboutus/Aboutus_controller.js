const db = require("../../../models");
const aboutus = db.Aboutus;


// insert Aboutus informatio using post request

module.exports.insertAboutus = async (req, res) => {
    try {
        // const AboutusInfo = req.body;
        // console.log('AboutusInfo', AboutusInfo);
        const { Aboutus, Mission, Vision } = req.body
        let data = {
            Aboutus,
            Mission,
            Vision,
            Img: req.file.path
        }
        const result = await aboutus.create(data)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Aboutus information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Aboutus information not found",
            error: error.message
        })
    }

}

// Update Aboutus

module.exports.updateAboutus = async (req, res) => {
    try {
        const { id } = req.params;
        const isthere = await aboutus.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await aboutus.update(req.body, {
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



//Get all Aboutus information using get request
module.exports.getAllAboutus = async (req, res) => {
    try {
        const result = await aboutus.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Aboutus information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Aboutus information not found",
            error: error.message,
        });
    }
};


//Aboutus information delete
module.exports.delete_Aboutus = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('Aboutus Id here', id)

        const isthere = await aboutus.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await aboutus.destroy({ where: { Content_Id: id } })

        // console.log("Aboutus_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Aboutus information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Aboutus found",
            error: error.message
        })
    }
}

