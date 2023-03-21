const db = require("../../models");
const sequelize = db.sequelize;
const WorkForce = db.WorkForce;
const Project = db.Project;
const Add_Employee = db.Add_Employee;


//WorkForce information insert using post request operation
module.exports.WorkForceInsert = async (req, res) => {
    try {
        const { Project_Id, Employee_Id } = req.body;
        // console.log("Dakhte chai Project_Id", Project_Id);
        // console.log("Dakhte chai Employee_Id", Employee_Id);
        for (let i = 0; i < Employee_Id.length; i++) {
            let a = {
                Employee_Id: Employee_Id[i],
                Project_Id: Project_Id
            }
            const result = await WorkForce.create(a);
        }
        //   Employee_Id.forEach(element => {
        //     const result = WorkForce.create(Project_Id,element);
        //     //console.log("Result",result)
        //   });
        //const result = await WorkForce.create();

        res.status(200).send({
            status: "Success",
            message: "Successfully WorkForce information insert",
        });
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: "couldn't find WorkForce information",
            error: error.message,
        });
    }
};

//WorkForce information update using post request operation

module.exports.WorkForceUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('Id was not found')
        }

        const result = await WorkForce.update(req.body,
            {
                where: { WF_Id: id }
            }
        )

        if (!result) {
            return res.status(400).send('WorkForce information not update')
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully WorkForce information insert"
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "WorkForce information not update",
            error: error.message

        })
    }

}

//WorkForce information update using delete request operation
module.exports.WorkForceDelete = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('Id was not found')
        }

        const result = await WorkForce.destroy(
            {
                where: { WF_Id: id }
            }
        )

        if (!result) {
            return res.status(400).send('Project not delete')
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully WorkForce project delete"
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Project couldn't delete",
            error: error.message

        })
    }

}

//get all WorkForce here
module.exports.getAllWorkForce = async (req, res) => {
    try {
        const result = await WorkForce.findAll();
        // console.log('data save on database', user)
        if (!result) {
            return res.status(400).send('Result not found')
        }
        res.status(200).send({
            status: "Success",
            message: "This is all WorkForce",
            data: result
        });


    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "No data found",
            error: error.message,
        });
    }
};

//get project based WorkForce here
module.exports.getProjectEmployee = async (req, res) => {

    const { Project_Id } = req.params;


    try {


        const result = await sequelize.query("select a.Employee_FirstName ,a.Employee_LastName, a.Designation ,a.Img, w.Employee_Id, w.WF_Id  from add_employees a join workforces w on a.Employee_Id = w.Employee_Id where w.Project_Id = ?;", {
            replacements: [Project_Id],
            type: sequelize.QueryTypes.SELECT
        })


        // console.log("ki re vai", result);
        if (!result) {
            return res.send('Result not found')
        }

        res.status(200).send({
            status: "Success",
            message: "This is all WorkForce",
            data: result
        });


    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "No data found",
            error: error.message,
        });
    }
};


//get WorkForce based Projects here
module.exports.getEmployeeProject = async (req, res) => {


    try {
        const { id } = req.params;


        const result = await sequelize.query("SELECT * FROM projects p JOIN workforces w ON w.Project_Id = p.Project_Id WHERE w.Employee_Id = ?", {
            replacements: [id],
            type: sequelize.QueryTypes.SELECT
        })

        // console.log('RRRRR', result);

        if (!result) {
            res.status(400).send({
                status: "Fail",
                message: "Result not found",

            });
        }
        res.status(200).send({
            status: "Success",
            message: "This is all WorkForce",
            data: result
        });


    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "No data found",
            error: error.message,
        });
    }
};


