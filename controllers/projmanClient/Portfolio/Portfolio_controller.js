const db = require("../../../models");
const Portfolio = db.Portfolio;


// insert Portfolio informatio using post request

module.exports.insertPortfolio = async (req, res) => {

    try {
        const PortfolioInfo = req.body;
        const result = await Portfolio.create(PortfolioInfo)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Portfolio information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Portfolio information not found",
            error: error.message
        })
    }

}

// Update Portfolio

module.exports.updatePortfolio = async (req, res) => {
    try {
      const { id } = req.params;
      const isthere = await Portfolio.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
      const result = await Portfolio.update(req.body, {
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



//Get all Portfolio information using get request
module.exports.getAllPortfolio = async (req, res) => {
    try {
        const result = await Portfolio.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Portfolio information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Portfolio information not found",
            error: error.message,
        });
    }
};


//Portfolio information delete
module.exports.delete_Portfolio= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        console.log('Portfolio Id here', id)

        const isthere = await Portfolio.findAll({ where: { Content_Id: id } });

        if (!isthere) {
            return res.send('Contant not found')

        }
        const result = await Portfolio.destroy({ where: { Content_Id: id } })

        console.log("Portfolio_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Portfolio information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Portfolio found",
            error: error.message
        })
    }
}

