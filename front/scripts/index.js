const axios = require("axios");
const renderCards = require("./renderCards");
const manejarEnvioFormulario = require("./formulario");



    axios.get("http://localhost:3000/movies")
    .then(response => {
        renderCards(response.data.data);
    })
    .catch(error => {
        console.error("Error al obtener las películas:", error);
    });

manejarEnvioFormulario();