const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require('./utils/database');
const { usersRoutes } = require('./routes');
const handleError = require("./middlewares/error");
require("dotenv").config();
const initModels = require("./models/initModels");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());  

initModels();  

db.sync({ alter: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))
  

app.get('/', (req, res) => {
  res.status(200).json({
    status: "Respuesta exitosa",
    description: "Prueva esta API con SWAGGER en el siguiente 'link'", 
    link: process.env.HOST,
  })
});

app.use('/api/v1', usersRoutes);
  
app.use(handleError);
module.exports = app;