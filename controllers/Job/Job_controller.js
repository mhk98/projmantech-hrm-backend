const db = require("../../db/db")
const job = db.Job;


// insert Job informatio using post request

module.exports.insertJob = async (req, res) => {

    try {
        const JobInfo = req.body;
        const result = await job.create(JobInfo)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Job information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Job information not found",
            error: error.message
        })
    }

}



//Get all Job information using get request
module.exports.getAllJob = async (req, res) => {
    try {
        const result = await job.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Job information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Job information not found",
            error: error.message,
        });
    }
};


//Job information delete
module.exports.delete_Job= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        console.log('Job Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await job.destroy({ where: { Job_Id: id } })

        console.log("Job_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Job information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Job found",
            error: error.message
        })
    }
}

// Job used by a specific employee

module.exports.getJob = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await job.findAll({ where:{ Job_Id: id }});

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Job information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Job information not found",
            error: error.message,
        });
    }
};


//Job information update
module.exports.update_Job = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.send('Id not found')

        }
        const result = await job.update(req.body, { where: { Job_Id: id } })


        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Payment update",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Payment_BankInfo found",
            error: error.message
        })
    }
}