const db = require("../../db/db")
const Payment = db.Payments;


// // insert Payment informatio using post request

// module.exports.insertPayment = async (req, res) => {

//     try {
//         const PaymentInfo = req.body;
//         const result = await Payment.create(PaymentInfo)
//         if (!result) {
//             return res.send('Result not found')

//         }

//         res.status(200).send({
//             status: "Success",
//             message: "Successfully Payment information insert",
//             data: result
//         })
//     } catch (error) {

//         res.status(400).send({
//             status: "Fail",
//             message: "Payment information not found",
//             error: error.message
//         })
//     }

// }



//Get all Payment information using get request
module.exports.getAllPayment = async (req, res) => {
    try {
        const result = await Payment.findAll();

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Payment information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Payment information not found",
            error: error.message,
        });
    }
};


//Payment information delete
module.exports.delete_Payment = async (req, res) => {
    try {
        const { id } = req.params;
        // const { educationId } = req.params;
        // console.log('Payment Id here', id)

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Payment.destroy({ where: { Payments_Id: id } })

        // console.log("Payment_information_update", req.body)
        if (!result) {
            return res.send('Result not found')

        }

        res.status(200).send({
            status: "Success",
            message: "Successfully Payment information delete",
            data: result
        })
    } catch (error) {

        res.status(400).send({
            status: "fail",
            message: "No Payment found",
            error: error.message
        })
    }
}

// Payment used by a specific Payment

module.exports.getPayment = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Payment.findAll({ where: { Payment_Id: id } });

        if (!result) {
            return res.send('Result not found')

        }
        res.status(200).send({
            status: "Success",
            message: "All Payment information",
            data: result,
        });
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Payment information not found",
            error: error.message,
        });
    }
};


//Payment education information update
module.exports.update_Payment = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.send('Id not found')

        }
        const result = await Payment.update(req.body, { where: { Payment_Id: id } })


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