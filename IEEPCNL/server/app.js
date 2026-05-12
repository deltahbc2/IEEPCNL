//APP - ORGANIZA Y CONFIGURA LA API

//ejecutamos la conexion de la bd
require('./data/db');

//importamos express donde se usa esta herramienta
const express = require('express');

//creacion del servidor / api
const app = express();
app.use(express.json());    


//Cuando alguien entra al servidor mandara un mensaje
//req = lo q el usuario envia | res = lo que el servidor responde
app.get('/', (req,res)=>{
    res.send('Servidor funcionando correctamente')
});

const authRouters = require('./routes/auth.routes');
//si inicia con /api se manda a routes
app.use('/api',authRouters)

//exporta lo que se almacene en 'module.exports'
module.exports = app;