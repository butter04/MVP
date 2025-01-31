const { fundTransfer } = require('../services/SingleTransfer');

async function TransferGestionner(req, res) {
    try {
        const transferDetails = req.body;
        const result = await fundTransfer(transferDetails);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    TransferGestionner
};
