const Movie = require('../models/Movie.js');

// Función para obtener todas las películas
async function getAllMovies() {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    throw error;
  }
}

module.exports = { getAllMovies };
