const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
module.exports = (req, res, next) => {
    console.log('Middleware auth appelé');
    try {
        if (!req.headers.authorization) {
            console.log('Header Authorization manquant');
            return res.status(401).json({ message: 'Token manquant.' });
        }

        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            console.log('Token non trouvé');
            return res.status(401).json({ message: 'Token invalide.' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token décodé:', decodedToken);

        if (!decodedToken || !decodedToken.userId) {
            console.log('UserId manquant dans le token');
            return res.status(401).json({ message: 'Utilisateur non trouvé dans le token.' });
        }

        req.user = decodedToken.userId;
        next();
    } catch (error) {
        console.error('Erreur JWT:', error);
        res.status(401).json({ message: 'Authentification échouée.' });
    }
};
