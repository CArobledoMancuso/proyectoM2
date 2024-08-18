require("dotenv").config();
const mongoose = require('mongoose');

async function dbCon() {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri);
    console.log('Conexión establecida con MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar con MongoDB Atlas:', error);
    throw error;
  };
};

module.exports = dbCon;
