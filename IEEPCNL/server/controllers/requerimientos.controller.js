const db = require('../data/db');

const createAct = async (req,res) => {
    const {nombre} = req.body;

    if (!nombre){
        return res.status(400).json({mensaje:"El nombre del acto es obligatorio"});
    }

    try{
        const query = 'INSERT INTO actividades (nombre) VALUES (?)';
        await db.query(query, [nombre]);
        res.status(201).json({mensaje: 'Acto creado correctamente'});
    }catch(e){
        console.error("ERROR GENERAL: ",e)
        res.status(500).json({mensaje: 'Error en el servidor'});
    }
};
