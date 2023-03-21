const db = require("../../../models");
const Countof = db.Countof;


// insert Countof informatio using post request

module.exports.insertCountof = async (req, res) => {

    try {
        // const CountofInfo = req.body;
        const { Title, Counted } = req.body
        let data = {
            Title,
            Counted,
            Img: req.file.path
        }
        const result = await Countof.create(data)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Countof information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Countof information not found",
            error: error.message
        })
    }

}

// Update Countof

module.exports.updateCountof = async (req, res) => {
    try {
        const { id } = req.params;
        const isthere = await Countof.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Countof.update(req.body, {
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



//Get all Countof information using get request
module.exports.getAllCountof = async (req, res) => {
    try {
        const result = await Countof.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Countof information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Countof information not found",
            error: error.message,
        });
    }
};


//Countof information delete
module.exports.delete_Countof = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('Countof Id here', id)

        const isthere = await Countof.findAll({ where: { Count_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Countof.destroy({ where: { Count_Id: id } })

        // console.log("Countof_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Countof information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Countof found",
            error: error.message
        })
    }
}

