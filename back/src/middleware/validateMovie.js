function validateMovie(req, res, next){
    const { title, year, director, duration, genre, rate, poster } = req.body;

    // Verifica si se proporcionan todos los campos requeridos
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Verifica el tipo de dato de cada campo
    if (typeof title !== 'string' || typeof director !== 'string' || typeof duration !== 'string' || !Array.isArray(genre) || typeof rate !== 'number' || typeof poster !== 'string') {
        return res.status(400).json({ error: 'Los tipos de datos de los campos son incorrectos' });
    };
 // Si la validación pasa, pasa al siguiente middleware o ruta
    next();
};


module.exports = validateMovie;