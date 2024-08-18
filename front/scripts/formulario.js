const axios = require('axios');

function manejarEnvioFormulario() {
    const formulario = document.getElementById('formularioPelicula');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obteniendo valores del formulario
        const title = document.getElementById('title').value;
        const year = parseInt(document.getElementById('year').value);
        const director = document.getElementById('director').value;
        const duration = document.getElementById('duration').value;
        const genre = (typeof document.getElementById('genre').value === 'string') ? document.getElementById('genre').value.split(',').map(genre => genre.trim()) : [];
        const rate = parseFloat(document.getElementById('rate').value);
        const poster = document.getElementById('poster').value;

        // Validando campos obligatorios
        if (!title || !year || !director || !duration || !genre || !rate || !poster) {
            alert('Todos los campos son obligatorios');
            return;
        };

    
axios.post('http://localhost:3000/moviesCreate', {
    title: document.getElementById('title').value,
    year: parseInt(document.getElementById('year').value),
    director: document.getElementById('director').value,
    duration: document.getElementById('duration').value,
    genre: (typeof document.getElementById('genre').value === 'string') ? document.getElementById('genre').value.split(',').map(genre => genre.trim()) : [],
    rate: parseFloat(document.getElementById('rate').value),
    poster: document.getElementById('poster').value
})
.then(response => {
    alert('Película cargada correctamente');
    formulario.reset();
})
.catch(error => {
    alert('Error al cargar la película');
    console.error(error);
});
    });
}

module.exports = manejarEnvioFormulario;
