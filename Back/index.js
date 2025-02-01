const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const accountRoutes = require('./src/routes/AccountRoutes');
const transferRoutes = require('./src/routes/TransferRoutes');

// const auth = require('./src/middlewares/authMiddleware');

// const admin = require('./src/routes/admin');

dotenv.config();

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Interswitch API',
        version: '1.0.0',
        description: 'Documentation de l\'API pour effectuer des transactions de vérification de compte et de virement',
      },
      servers: [
        {
          url: 'http://localhost:8080',
          description: 'API locale',
        },
      ],
    },
    apis: ['./src/routes/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  
const PORT = process.env.PORT || 8080;
const corsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  };
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', true);
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
    app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
}));


// pool.getConnection((err, connection) => {
//     if (err) {
//         console.error('Erreur lors de la connexion à la base de données :', err.message);
//         process.exit(84);
//     } else {
//         console.log('Connecté à la base de données MySQL');
//     }
// });
app.use(express.json());
app.use('/api/accounts', accountRoutes);
app.use('/api/transfers', transferRoutes);

// app.use('/api/admin', admin);

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur AREA API!' });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use((err, req, res, next) => {
    console.error('Erreur :', err.message);
    res.status(500).json({ error: 'Erreur interne du serveur' });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
