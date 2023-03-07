const db = require("../../../models");
const Exclusive = db.Exclusive;


// insert Exclusive informatio using post request

module.exports.insertExclusive = async (req, res) => {

    try {
        const ExclusiveInfo = req.body;
        const result = await Exclusive.create(ExclusiveInfo)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Exclusive information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Exclusive information not found",
            error: error.message
        })
    }

}

// Update Exclusive

module.exports.updateExclusive = async (req, res) => {
    try {
      const { id } = req.params;
      const isthere = await Exclusive.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
      const result = await Exclusive.update(req.body, {
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



//Get all Exclusive information using get request
module.exports.getAllExclusive = async (req, res) => {
    try {
        const result = await Exclusive.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Exclusive information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Exclusive information not found",
            error: error.message,
        });
    }
};


//Exclusive information delete
module.exports.delete_Exclusive= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        console.log('Exclusive Id here', id)

        const isthere = await Exclusive.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Exclusive.destroy({ where: { Content_Id: id } })

        console.log("Exclusive_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Exclusive information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Exclusive found",
            error: error.message
        })
    }
}

