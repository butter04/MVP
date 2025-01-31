const express = require('express');
const router = express.Router();
const { CheckCard } = require('../controllers/countverif');

/**
 * @swagger
 * /api/accounts/checkcards:
 *   get:
 *     summary: Verifies the account name associated with an account number.
 *     description: This route checks the account name for a given account number in a specific bank.
 *     parameters:
 *       - in: query
 *         name: accountId
 *         required: true
 *         description: The account number to check.
 *         schema:
 *           type: string
 *           example: "0730804844"
 *       - in: query
 *         name: bankCode
 *         required: true
 *         description: The bank code to check.
 *         schema:
 *           type: string
 *           example: "044"
 *     responses:
 *       200:
 *         description: The account name and other relevant information are returned.
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
 *                   example: "Success"
 *                 AccountName:
 *                   type: string
 *                   example: "John Doe"
 *                 AccountStatus:
 *                   type: string
 *                   example: "Active"
 *       400:
 *         description: Invalid parameters or server error.
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
 *                   example: "Invalid request"
 */

router.get('/checkcards', CheckCard);

module.exports = router;
