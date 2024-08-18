const movieService = require('../service/createMovieservice');

const createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        console.log('Película creada con éxito:', movie);
        res.status(201).json({ message: 'Película creada exitosamente'});
    } catch (error) {
        console.error('Error al crear la película:', error);
        res.status(500).json({ error: 'Error al crear la película' });
    }
};

module.exports = {
    createMovie
};

