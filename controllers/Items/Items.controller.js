const db = require("../../models");
const Items = db.Items;
const Estimates = db.Estimate
let totalamount = 0;


// async function updateamount(totalamount, latestEstimatesId) {
//     const b = totalamount;
//     const updateit = await Estimates.update(b, { where: { Estimate_Id: latestEstimatesId } })
//     console.log("Update", updateit);
// }

// insert Items informatio using post request

module.exports.insertItems = async (req, res) => {

    try {

        // const { Item_Name, Discription, unitCost, quantity, amount } = req.body.field[0];
        let { latestEstimatesId } = req.body;
         //console.log('latestEstimatesId', latestEstimatesId)
        let data = req.body.field
        // console.log('data', data)
        for (let i = 0; i < data.length; i++) {
            let a = {
                Item_Name: data[i].Item_Name,
                Discription: data[i].Discription,
                Unit_Cost: data[i].unitCost,
                Quantity: data[i].quantity,
                Amount: data[i].amount,
                estimateEstimateId: latestEstimatesId
            }

            // totalamount = totalamount + parseInt(a.Amount);



            const result = await Items.create(a)

            // console.log('result', result);
        }

        // console.log('Total amount', totalamount);

        // console.log("Call function", updateamount(totalamount, latestEstimatesId));





    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Items information not found",
            error: error.message
        })
    }
}
// insert Items informatio from invoice using post request

module.exports.insertInvoiceItems = async (req, res) => {

    try {

        // const { Item_Name, Discription, unitCost, quantity, amount } = req.body.field[0];
        let { latestInvoicesId } = req.body;
        // console.log('latestInvoicesId', latestInvoicesId)
         
        let data = req.body.field

        // console.log('data', data)



        for (let i = 0; i < data.length; i++) {


            let a = {
                Item_Name: data[i].Item_Name,
                Discription: data[i].Discription,
                Unit_Cost: data[i].unitCost,
                Quantity: data[i].quantity,
                Amount: data[i].amount,
                invoiceInvoiceId: latestInvoicesId


            }

            // totalamount = totalamount + parseInt(a.Amount);



            const result = await Items.create(a)

            // console.log('result', result);
        }

        // console.log('Total amount', totalamount);

        // console.log("Call function", updateamount(totalamount, latestEstimatesId));





    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Items information not found",
            error: error.message
        })
    }
}

//get all Items information using get request

module.exports.getAllItems = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log('getAllItems', id);
        const result = await Items.findAll({
            where: { estimateEstimateId: id }
        });

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Items information",
            data: totalamount,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Items information not found",
            error: error.message,
        });
    }
};