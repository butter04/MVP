const express = require('express');
const router = express.Router();
const { TransferGestionner } = require('../controllers/SingleTransfer');

/**
 * @swagger
 * /api/transfers/fund-transfer:
 *   post:
 *     summary: Executes a fund transfer from one account to another.
 *     description: This route allows the transfer of funds between a sender and a beneficiary in a banking system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mac:
 *                 type: string
 *                 description: MAC for the secure signature of the transaction.
 *                 example: "9f4e4f53c57be63e1f08d8f07a7bc1a9461e4a7d5304043daa1ef54bd727b6cde148f4fbfc5e2ad8c4a60f78dfa76304de671fbeb70657b1628f14b6b6baa5e1"
 *               termination:
 *                 type: object
 *                 properties:
 *                   amount:
 *                     type: string
 *                     description: Transfer amount in kobo.
 *                     example: "100000"
 *                   accountReceivable:
 *                     type: object
 *                     properties:
 *                       accountNumber:
 *                         type: string
 *                         example: "3001155245"
 *                       accountType:
 *                         type: string
 *                         example: "00"
 *                   entityCode:
 *                     type: string
 *                     description: Beneficiary bank code.
 *                     example: "044"
 *                   currencyCode:
 *                     type: string
 *                     description: Currency code (Naira).
 *                     example: "566"
 *                   paymentMethodCode:
 *                     type: string
 *                     example: "AC"
 *                   countryCode:
 *                     type: string
 *                     example: "NG"
 *               sender:
 *                 type: object
 *                 properties:
 *                   phone:
 *                     type: string
 *                     example: "08124888436"
 *                   email:
 *                     type: string
 *                     example: "dadubiaro@interswitch.com"
 *                   lastname:
 *                     type: string
 *                     example: "Adubiaro"
 *                   othernames:
 *                     type: string
 *                     example: "Deborah"
 *               initiatingEntityCode:
 *                 type: string
 *                 example: "PBL"
 *               initiation:
 *                 type: object
 *                 properties:
 *                   amount:
 *                     type: string
 *                     example: "100000"
 *                   currencyCode:
 *                     type: string
 *                     example: "566"
 *                   paymentMethodCode:
 *                     type: string
 *                     example: "CA"
 *                   channel:
 *                     type: string
 *                     example: "7"
 *               beneficiary:
 *                 type: object
 *                 properties:
 *                   lastname:
 *                     type: string
 *                     example: "ralph"
 *                   othernames:
 *                     type: string
 *                     example: "ralpo"
 *     responses:
 *       200:
 *         description: Fund transfer was successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ResponseCode:
 *                   type: string
 *                   example: "00"
 *                 ResponseDescription:
 *                   type: string
 *                   example: "Transaction Successful"
 *                 TransferCode:
 *                   type: string
 *                   example: "TRX-1738207673847"
 *                 TransactionStatus:
 *                   type: string
 *                   example: "Completed"
 *       400:
 *         description: Invalid parameter or server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ResponseCode:
 *                   type: string
 *                   example: "10002"
 *                 ResponseDescription:
 *                   type: string
 *                   example: "Invalid transfer code"
 */

router.post('/fund-transfer', TransferGestionner);

module.exports = router;
