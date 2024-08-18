const { getAllMovies } = require("../service/movieService");

const moviesController = async (request, response) => { // Añadir async para que pueda utilizar await
    try {
        // Solicita al servicio que se encargue de traer la información pertinente
        const resultado = await getAllMovies();

        // Responde al cliente
        response.status(200).json({
            message: "Todas las películas cargadas sin errores",
            data: resultado,
        });
    } catch (error) {
        console.error('Error en el controlador de películas:', error);
        response.status(500).json({
            message: "Error al obtener las películas",
            error: error.message
        });
    }
};

module.exports = {
    moviesController,
};
