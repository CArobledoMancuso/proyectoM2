const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/server");
const dbCon = require("./src/config/dbCon.js");

// Corregido el nombre de la variable de entorno PORT
const PORT = process.env.PORT || 3000; // Asigna un puerto predeterminado si no se especifica en las variables de entorno

dbCon()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB Atlas:', error);
  });
