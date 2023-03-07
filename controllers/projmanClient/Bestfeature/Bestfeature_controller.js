const db = require("../../../models");
const Bestfeature = db.Bestfeature;


// insert Bestfeature informatio using post request

module.exports.insertBestfeature = async (req, res) => {

    try {
        const BestfeatureInfo = req.body;
        const result = await Bestfeature.create(BestfeatureInfo)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Bestfeature information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Bestfeature information not found",
            error: error.message
        })
    }

}

// Update Bestfeature

module.exports.updateBestfeature = async (req, res) => {
    try {
      const { id } = req.params;
      const isthere = await Bestfeature.findAll( {where: { Content_Id: id } });

      if (!isthere) {
          return res.send('Contant not found')

      }
      const result = await Bestfeature.update(req.body, {
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



//Get all Bestfeature information using get request
module.exports.getAllBestfeature = async (req, res) => {
    try {
        const result = await Bestfeature.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Bestfeature information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Bestfeature information not found",
            error: error.message,
        });
    }
};


//Bestfeature information delete
module.exports.delete_Bestfeature= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        console.log('Bestfeature Id here', id)

        const isthere = await Bestfeature.findAll( {where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Bestfeature.destroy({ where: { Content_Id: id } })

        console.log("Bestfeature_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Bestfeature information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Bestfeature found",
            error: error.message
        })
    }
}

