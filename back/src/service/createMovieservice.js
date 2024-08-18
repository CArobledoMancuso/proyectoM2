const Movie = require('../models/Movie');


const createMovie = async (movieData) => {
    try {
        const movie = Movie.create(movieData);
        return movie;
    } catch (error) {
        throw new Error('Error al crear la película en el servicio');
    }
};

module.exports = {
    createMovie
};
