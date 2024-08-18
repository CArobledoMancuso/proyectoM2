const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index.js");

const app = express();

// Middleware para registrar solicitudes HTTP con Morgan
app.use(morgan('dev'));

// Middleware para habilitar CORS 
app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas
app.use(router);

module.exports = app;
