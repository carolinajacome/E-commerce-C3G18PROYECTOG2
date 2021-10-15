require('dotenv').config();

// Configuracion del servidor web
const express = require('express');
const cors = require('cors'); // Habilitar la conección desde cualquier fuente

const app = express();
app.use(cors());
app.use(express.json()); // Toda la comunicación establecida se hacer por medio de json
app.use(express.urlencoded({ extended: true })); // Enviar datos por url para interpretación

// Definir rutas
app.use("/api", require("./routes/routes"));

// Iniciar servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));