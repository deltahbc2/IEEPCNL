//DB - CONEXION A BASE DE DATOS, NODE CON MySQL

//importamos la libreria que trabaja con msql
const msql = require('mysql2')


//creamos la coneccion a la base de datos
const connection = msql.createConnection({

//informacion de la bd
    host: 'localhost', // bd es nuestra propia computadora
    user: 'root', //por defecto en xampp
    password: '',
    database: 'login_db'
});


//intenta conectarla, por si acaso tiene un parametro error
connection.connect((err) => {

    if (err){
        // si se ejecuta un error lanzar     stack = detiene el proceso
        console.error("Error de conexion: "+err.stack);
        return;
    }

    // si no se detecta ningun error, todo bien
    console.log('Conectado a la base de datos');
});

module.exports = connection