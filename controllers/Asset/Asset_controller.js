const db = require("../../db/db")
const Asset = db.Asset;


// insert Asset informatio using post request

module.exports.insertAsset = async (req, res) => {

    try {
        const assetInfo = req.body;
        const result = await Asset.create(assetInfo)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Asset information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Asset information not found",
            error: error.message
        })
    }

}



//Get all Asset information using get request
module.exports.getAllAsset = async (req, res) => {
    try {
        const result = await Asset.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Asset information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Asset information not found",
            error: error.message,
        });
    }
};


//Asset information delete
module.exports.delete_Asset= async (req, res) => {
    try {
        const { id } = req.params;
       // const { educationId } = req.params;
        // console.log('Asset Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Asset.destroy({ where: { Assets_Id: id } })

        // console.log("Asset_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Asset information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Asset found",
            error: error.message
        })
    }
}

// Asset used by a specific employee

module.exports.getAsset = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Asset.findAll({ where:{ addEmployeeEmployeeId: id }});

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Asset information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Asset information not found",
            error: error.message,
        });
    }
};