'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para agregar el encabezado personalizado
app.use((req, res, next) => {
    // Establecer el encabezado personalizado
    res.setHeader('ngrok-skip-browser-warning', 'true');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servicio Webhook');
});

app.get('/webhook', (req, res) => {
    res.send({ message: 'UBER Eats Webhook' });
});

app.post('/webhook', (req, res) => {
    var data = req.body;
    console.log('Inicio del Json recibido');
    console.log(data);
    console.log('Fin del Json recibido');
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servicio corriendo en el puerto ${port}`);
});
