const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Despliegue Automático</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #0f172a, #2563eb);
          color: white;
          text-align: center;
          padding: 80px;
        }

        .card {
          background: rgba(255, 255, 255, 0.12);
          padding: 40px;
          border-radius: 20px;
          max-width: 700px;
          margin: auto;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        h1 {
          font-size: 38px;
        }

        p {
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Bienvenido a mi aplicación web</h1>
        <p>Esta aplicación fue creada para demostrar un despliegue automático en Azure App Service.</p>
        <p><strong>Versión 1:</strong> Cambio realizado para comprobar el despliegue automático.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});