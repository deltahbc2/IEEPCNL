const db = require('../data/db');

const validarNombreApellidos = (nombre, apellidos) => {
    if (!nombre || !apellidos) return { valido: false, error: 'Nombre y apellidos obligatorios' };
    if (!/^[a-zA-Z\s]+$/.test(nombre) || !/^[a-zA-Z\s]+$/.test(apellidos)) return { valido: false, error: 'Solo deben contener letras y espacios' };
    return { valido: true };
}

const validarCURP = (curp) => {
    if (!curp) return { valido: false, error: 'CURP obligatorio' };
    if (curp.length !== 18) return { valido: false, error: 'CURP debe tener 18 caracteres' };
    return { valido: true };
};

const validarTelefono = (telefono) => {
    if (!telefono) return { valido: false, error: 'Teléfono obligatorio' };
    if (!/^\d+$/.test(telefono)) return { valido: false, error: 'El teléfono solo debe tener números' };
    if (telefono.length !== 10) return { valido: false, error: 'El teléfono debe tener 10 dígitos' };
    return { valido: true };
};

const validarContrasena = (contrasena) => {
    if (!contrasena) return { valido: false, error: 'Contraseña obligatoria' };
    if(contrasena.length < 8) return { valido: false, error: 'Contraseña debe tener al menos 8 caracteres' };
    if (!/[A-Z]/.test(contrasena)) return { valido: false, error: 'Contraseña debe tener una letra mayúscula' };
    if (!/[a-z]/.test(contrasena)) return { valido: false, error: 'Contraseña debe tener una letra minúscula' };
    if (!/\d/.test(contrasena)) return { valido: false, error: 'Contraseña debe tener un número' };
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) return { valido: false, error: 'Contraseña debe tener un carácter especial' };
    return { valido: true };
};

const registro = async (req,res) => {
    const {usuario, contrasena, rol_usuario,nombre,apellidos,curp,fecha_registro,num_telefono,direccion} = req.body;

    //validar datos que no esten vacios
    if (!usuario || !contrasena || !rol_usuario || !nombre || !apellidos || !curp || !fecha_registro || !num_telefono || !direccion){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios"});
    }

    const nombreApellidosValidacion = validarNombreApellidos(nombre, apellidos);
    if (!nombreApellidosValidacion.valido) return res.status(400).json({ error: nombreApellidosValidacion.error });

    const contraseñaValidacion = validarContrasena(contrasena);
    if (!contraseñaValidacion.valido) return res.status(400).json({ error: contraseñaValidacion.error });

    const telefonoValidacion = validarTelefono(num_telefono);
    if (!telefonoValidacion.valido) return res.status(400).json({ error: telefonoValidacion.error });

    const curpValidacion = validarCURP(curp);
    if (!curpValidacion.valido) return res.status(400).json({ error: curpValidacion.error });
    

    try {
        const query = 'INSERT INTO usuarios (usuario, contrasena, rol_usuario, nombre, apellidos, curp, fecha_registro, num_telefono, direccion) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        //se ejecuta la consulta
        db.query(query, [usuario, contrasena, rol_usuario, nombre, apellidos, curp, fecha_registro, num_telefono, direccion], (err,result) =>{
            //si hay error de parte de sql
            if (err){
                console.error("ERROR SQL:", err);
                return res.status(500).json({mensaje: 'Error al registrar usuarios'});
            }
            // si no hay problema 
            res.status(201).json({mensaje: 'Usuario registrado correctamente'});
        });

        //atrapa el error general
    }catch(error){
        console.error("ERROR GENERAL: ",error)
        res.status(500).json({mensaje: 'Error en el servidor'});
    }
};


//login
const login = (req,res) => {
    //esto son los datos que pediremos
    const {usuario,contrasena} = req.body;

    //usuario y contraseña deben de estar llenos
    if(!usuario || !contrasena){
        return res.status(400).json({mensaje: "Usuario y contraseña son obligatorios"});
    }

    //buscar usuario en BD
    const query = "SELECT * FROM usuarios WHERE usuario = ?";

    //se ejecuta la consulta
    db.query(query,[usuario],async(err,results) => {
        //en caso de error del servidor
        if(err){
            console.error(err);
            return res.status(500).json({mensaje:"Error en el servidor"});
        }

        //en caso de que no encuentre al usuario
        if(results.length === 0){
            return res.status(400).json({mensaje:"Usuario no encontrado"});
        }

        //trae el primer resultado (BD devuelve datos en cadenas)
        const usuario= results[0];

        //comparar contraseña
        const valido = await bcrypt.compare(contrasena, usuario.contrasena);

        //verifica si es valido
        if(!valido){
            return res.status(400).json({mensaje:"Contraseña incorrecta"});
        }

        //el servidor devuelve ms al usuario
        res.json({
            mensaje: "Login exitoso",
         });
    });
};


module.exports = {
    registro,
    login
}
