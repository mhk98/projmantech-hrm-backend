const db = require("../../models");
const Clients = db.PMT_Clients;
const { customerLogger, ErrorLogger } = require("../../utils/logger");

//Client information insert using post request operation
module.exports.clientInsert = async (req, res) => {
  try {
    const clientInfo = req.body;
    const {
      Client_Id,
      Client_FirstName,
      Client_LastName,
      Client_Email,
      Client_Position,
      Client_DOB,
      Address,
      Contact_No,
      Company_Name,
    } = req.body;
    // console.log("clientInfo", req.file);
    const result = await Clients.create({
      Client_Id,
      Client_FirstName,
      Client_LastName,
      Client_Email,
      Client_Position,
      Client_DOB,
      Address,
      Contact_No,
      Company_Name,
      Img: req.file.path,
    });
    if (!result) {
      return res.status(400).send("Result not found");
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully client information insert",
    });
  } catch (error) {
    ErrorLogger.error("clientInsert" + " " + error.message);

    res.status(400).send({
      status: "Fail",
      message: "couldn't find client information",
      error: error.message,
    });
  }
};

//get all Clients here
module.exports.getAllClients = async (req, res) => {
  try {
    const result = await Clients.findAll();
    // console.log('data save on database', user)
    if (!result) {
      res.status(400).send({
        status: "Fail",
        message: "Result not found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "This is all Clients",
      data: result,
    });
  } catch (error) {
    ErrorLogger.error("getAllClients" + " " + error.message);
    res.status(500).json({
      status: "fail",
      message: "No data found",
      error: error.message,
    });
  }
};

//get individual Client here
module.exports.getOneClient = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Clients.findOne({ where: { Client_Id: id } });
    // console.log('data save on database', user)
    if (!result) {
      return res.status(400).send("Result not found");
    }
    res.status(200).send({
      status: "Success",
      message: "This is the CLient",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "No data found",
      error: error.message,
    });
  }
};

// module.exports.updateClientInformation = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const result = await Clients.update(req.body, {
//         where: { Client_Id: id },
//       });
//       res.status(200).send({
//         status: "Success",
//         message: "Successfully update employee information",
//         data: result,
//       });
//     } catch (error) {
//       res.status(400).send({
//         status: "fail",
//         message: "Couldn't update employee information",
//         error: error.message,
//       });
//     }
//   };

//Client information delete
module.exports.delete_Client = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        Success: "false",
        message: "Not a valid id",
      });
    }
    const result = await Clients.destroy({ where: { Client_Id: id } });

    //console.log("Department_information_update", req.body)
    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Department information found",
      });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully Department information delete",
      data: result,
    });
  } catch (error) {
    ErrorLogger.error("delete_Client" + " " + error.message);

    res.status(400).send({
      status: "fail",
      message: "No Department found",
      error: error.message,
    });
  }
};

//Total clients count here
module.exports.clientCount = async (req, res) => {
  try {
    const clientCount = await Clients.count().then((client) => {
      // console.log("client", client);

      if (!client) {
        return res.status(404).send("Clientcount not found");
      }

      res.status(200).send({
        status: "Success",
        message: "Successfully got total client count",
        client,
      });
    });
  } catch (error) {
    ErrorLogger.error("clientCount" + " " + error.message);

    res.status(400).send({
      status: "fail",
      message: "Couldn't find project information",
      error: error.message,
    });
  }
};
