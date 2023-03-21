const db = require("../../models")
const sequelize = db.sequelize;
const Projects = db.PMT_Projects;
const Client = db.Client;
const WorkForce = db.WorkForce;
const { customerLogger, ErrorLogger } = require("../../utils/logger");


//Projects information insert using post request operation
module.exports.projectsInsert = async (req, res) => {
    try {
        const projectsInfo = req.body;

        const result = await Projects.create(projectsInfo)
        if (!result) {
            return res.status(400).send('Result not found')


        }

        res.status(200).send({
            status: 'Success',
            message: 'Successfully projects information insert',
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'Fail',
            message: "couldn't find Projects information",
            error: error.message

        })
        ErrorLogger.error("project insert" + " " + error.message);
    }




},


    //Projects information update using post request operation

    module.exports.projectsUpdate = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).send('Id not found')

            }

            const result = await Projects.update(req.body,
                {
                    where: { Project_Id: id }
                }
            )

            if (!result) {
                return res.status(400).send('Result not found')

            }

            res.status(200).send({
                status: "Success",
                message: "Successfully projects information insert"
            })
        } catch (error) {

            res.status(400).send({
                status: "Fail",
                message: "Projects information not update",
                error: error.message

            })
            ErrorLogger.error("project update" + " " + error.message);
        }

    }

//Projects information update using delete request operation
module.exports.projectsDelete = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('Id not found')

        }

        const result = await Projects.destroy(
            {
                where: { Project_Id: id }
            }
        )

        if (!result) {
            return res.status(400).send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully projects project delete"
        })
    } catch (error) {
        ErrorLogger.error("project delete" + " " + error.message);
        res.status(400).send({
            status: "Fail",
            message: "Project couldn't delete",
            error: error.message

        })
    }

}

//get all projects here
module.exports.getAllProjects = async (req, res) => {
    try {
        // console.log("Clients all")
        const result = await sequelize.query("select p.*, c.Client_FirstName, c.Client_LastName  from projects p, clients c where p.clientClientId =c.Client_Id ;", {
            type: sequelize.QueryTypes.SELECT
          })
        // const result = await Projects.findAll();
        // console.log('data save on database', user)
        if (!result) {
            return res.status(400).send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "This is all projects",
            data: result
        });


    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "No data found",
            error: error.message,
        });
        ErrorLogger.error("get task invidual" + " " + error.message);
    }
};


//Get project information for searching

module.exports.searchingIndividualProject = async (req, res) => {

    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('Id not found')

        }

        const result = await Projects.findAll({
            where: { Project_Id: id }
        })

        res.status(200).send({
            status: "Success",
            message: "Successfully got project information",
            data: result
        })

    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: "Couldn't get project information",
            error: error.message
        })
        ErrorLogger.error(req.originalUrl + " " + error.message);
    }
}

// //Get project information for client

module.exports.searchingClientProject = async (req, res) => {

    try {
        const { id } = req.params;
        // console.log("Client ID ", id);
        if (!id) {
            return res.status(400).send('Id not found')

        }

        const result = await Projects.findAll({
            where: { clientClientId: id }
        })

        // console.log("the projects of clients", result);

        res.status(200).send({
            status: "Success",
            message: "Successfully got project information",
            data: result
        })

    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: "Couldn't get project information",
            error: error.message
        })
        ErrorLogger.error("searchingClientProject" + " " + error.message);
    }
}


//Total project count here
module.exports.projectCount = async (req, res) => {
    try {

        const projectCount = await Projects.count().then((project) => {
            // console.log('Tasks', project)

            if (!project) {
                return res.status(404).send('Projectcount not found')
            }

            res.status(200).send({
                status: "Success",
                message: 'Successfully got total project count',
                project
            })
        });


    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Couldn't find project information",
            error: error.message,
        });

        ErrorLogger.error("ProjectCount" + " " + error.message);
    }
};

//for report of Developing project
module.exports.allDevelopingProject = async (req, res) => {
    try {
      const proj = await Projects.findAll({ where: { Status: "Developing" } });
      res.status(200).send(proj);
    } catch (error) {
      ErrorLogger.error("allDevelopingProject" + " " + error.message);
      res.status(500).send(error);
    }
  };
  //for report of test projects
  module.exports.allTestProject = async (req, res) => {
    try {
      const proj = await Projects.findAll({ where: { Status: "Test" } });
      res.status(200).send(proj);
    } catch (error) {
      ErrorLogger.error("allTestProject" + " " + error.message);
      res.status(500).send(error);
    }
  };
  //for report of deployed project
  module.exports.allDeployedProject = async (req, res) => {
    try {
      const proj = await Projects.findAll({ where: { Status: "Deployed" } });
      res.status(200).send(proj);
    } catch (error) {
      ErrorLogger.error("allDeployedProject" + " " + error.message);
      res.status(500).send(error);
    }
  };
  