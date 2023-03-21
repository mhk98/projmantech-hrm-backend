const db = require("../../../models");
const Slide = db.Slide;


// insert Slide informatio using post request

module.exports.insertSlide = async (req, res) => {

    try {

        const { Content } = req.body
        // const path = "demo/"+ pathName
        // console.log(" ---Body",req.file.path);
        let data = {
            Content,
            Img: req.file.path
        }

        const result = await Slide.create(data)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Slide information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Slide information not found",
            error: error.message
        })
    }

}

// Update Slide

module.exports.updateSlide = async (req, res) => {
    try {
        const { id } = req.params;
        const isthere = await Slide.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Slide.update(req.body, {
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



//Get all Slide information using get request
module.exports.getAllSlide = async (req, res) => {
    try {
        const result = await Slide.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Slide information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Slide information not found",
            error: error.message,
        });
    }
};


//Slide information delete
module.exports.delete_Slide = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('Slide Id here', id)

        const isthere = await Slide.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Slide.destroy({ where: { Content_Id: id } })

        // console.log("Slide_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Slide information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Slide found",
            error: error.message
        })
    }
}

