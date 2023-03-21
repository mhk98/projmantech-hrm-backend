const db = require("../../../models");
const sequelize = db.sequelize;
const OurClients = db.OurClient;

// insert OurClient informatio using post request

module.exports.insertOurClient = async (req, res) => {
  try {
    // const data = req.body
    const { Client_Name, Content } = req.body;
    let data = {
      Client_Name,
      Content,
      Img: req.file.path,
    };
    const result = await OurClients.create(data);
    if (!result) {
      return res.send("Result not found");
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully OurClient information insert",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "OurClient information not found",
      error: error.message,
    });
  }
};

// Update OurClient

module.exports.updateOurClient = async (req, res) => {
  try {
    const { id } = req.params;
    const isthere = await OurClients.findAll({ where: { Client_Id: id } });

    if (!isthere) {
      return res.send("Contant not found");
    }
    const result = await OurClients.update(req.body, {
      where: { Client_Id: id },
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

//Get all OurClient information using get request
module.exports.getAllOurClient = async (req, res) => {
  try {
    const result = await OurClients.findAll();

    if (!result) {
      return res.send("Result not found");
    }
    res.status(200).send({
      status: "Success",
      message: "All OurClient information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "OurClient information not found",
      error: error.message,
    });
  }
};

//OurClient information delete
module.exports.delete_OurClient = async (req, res) => {
  try {
    const { id } = req.params;
    // const { educationId } = req.params;
    // console.log('OurClient Id here', id)

    const isthere = await OurClients.findAll({ where: { Client_Id: id } });

    if (!isthere) {
      return res.send("Contant not found");
    }
    const result = await OurClients.destroy({ where: { Client_Id: id } });

    // console.log("OurClient_information_update", req.body)
    if (!result) {
      return res.send("Result not found");
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully OurClient information delete",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "No OurClient found",
      error: error.message,
    });
  }
};
