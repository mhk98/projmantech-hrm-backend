const db = require("../../../models");
const Contact = db.Contact;


// insert Contact informatio using post request

module.exports.insertContact = async (req, res) => {

    try {
        const ContactInfo = req.body;
        const result = await Contact.create(ContactInfo)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Contact information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Contact information not found",
            error: error.message
        })
    }

}

// Update Contact

module.exports.updateContact = async (req, res) => {
    try {
      const { id } = req.params;
      const isthere = await Contact.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
      const result = await Contact.update(req.body, {
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



//Get all Contact information using get request
module.exports.getAllContact = async (req, res) => {
    try {
        const result = await Contact.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Contact information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Contact information not found",
            error: error.message,
        });
    }
};


//Contact information delete
module.exports.delete_Contact= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        // console.log('Contact Id here', id)

        const isthere = await Contact.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Contact.destroy({ where: { Content_Id: id } })

        // console.log("Contact_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Contact information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Contact found",
            error: error.message
        })
    }
}

