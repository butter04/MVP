const pool = require('../config/db');

const isAdmin = async (req, res, next) => {
    console.log("testion is admin");
    try {
        const userId = req.user;
        console.log(userId);
        if (!userId) {
            return res.status(401).json({ message: "Non autorisé : utilisateur non identifié." });
        }
        const query = `SELECT isAdmin FROM users WHERE id = ? AND isActive = TRUE`;
        const [rows] = await pool.execute(query, [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "Utilisateur introuvable ou désactivé." });
        }
        const user = rows[0];
        if (!user.isAdmin) {
            return res.status(403).json({ message: "Accès refusé : vous n'êtes pas administrateur." });
        }
        next();
    } catch (error) {
        console.error("Erreur dans le middleware isAdmin :", error.message);
        res.status(500).json({ message: "Erreur serveur." });
    }
};

module.exports = {isAdmin};
