const db = require("../../db/db");
const Items = require("../../models/Items/Items");
const Invoices = db.Invoices;
const Payment = db.Payments


// insert invoices informatio using post request

module.exports.insertInvoices = async (req, res) => {

    try {
        const invoices = req.body;
        const result = await Invoices.create(invoices)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Invoice information insert",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Invoice information not found",
            error: error.message
        })
    }
}

//Get all invoices information using get request
module.exports.getAllInvoice = async (req, res) => {
    try {
        const result = await Invoices.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All invoice information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Invoice information not found",
            error: error.message,
        });
    }
};


//Get single data whose status paid
module.exports.getSingleVoice = async (req, res) => {
    try {
        const result = await Invoices.findAll({
            where: { Status: 'Paid' }
        })

        // console.log('Paid payment', result)

        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            Status: "Success",
            message: "Invoice found",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Invoice couldn't found",
            error: error.message,
        })
    }
}


// update invoices informatio using put request
module.exports.updateInvoices = async (req, res) => {

    try {
        const invoices = req.body;
        const { id } = req.params;
        // console.log("the invice id", id);
        // console.log('invoices', invoices)
        const result = await Invoices.update(invoices, {
            where: { Invoice_Id: id }
        })
        if (!result) {
            return res.send('Result not found')

        }

        const invodata = await Invoices.findOne({ where: { Invoice_Id: id } })
        // console.log("invodata", invodata);
        // console.log("Status", invodata.Status);
        // console.log("invodata", invodata);
        // const { Invoice_Id, Grand_Total, Status } = invodata;

        // console.log('updateInvoices', result);
        const paymentdata = {
            Invoice_Id: id,
            Paid_Date: new Date(),
            Paid_Amount: invodata.Grand_Total,
            Status: invodata.Status

        }



        // console.log("paymet created", paymentdata);
        if (invodata.Status === 'Pending') {

            const paid = await Payment.create(paymentdata);
        } else {
            const paidup = await Payment.update(paymentdata, {
                where: { Invoice_Id: id }
            });
        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Invoices information update",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Invoices information not found",
            error: error.message
        })
    }
}
// update invoices informatio using put request
module.exports.deleteInvoices = async (req, res) => {

    try {
        const invoices = req.body;
        const { id } = req.params;
        // console.log('invoices', invoices)
        const result = await Invoices.destroy({
            where: { Invoice_Id: id }
        })
        if (!result) {
            return res.send('Result not found')

        }
        const delitem = await Items.destroy({
            where: { Invoice_Id: id }
        })
        res.status(200).send({
            status: "Success",
            message: "Successfully Invoices information delete",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            status: "Fail",
            message: "Invoices information not found",
            error: error.message
        })
    }
}


