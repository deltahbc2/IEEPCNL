const db = require('../data/db');

const createAct = async (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ mensaje: "El nombre de la actividad es obligatorio" });
    }

    try {
        const query = 'INSERT INTO actividades (nombre) VALUES (?)';
        const [result] = await db.query(query, [nombre]);
        
        res.status(201).json({ 
            mensaje: 'Actividad creada correctamente',
            id: result.insertId // Solo disponible en MySQL. En PG usa result.rows[0].id
        });
    } catch (e) {
        console.error("ERROR GENERAL: ", e);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const updateAct = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body; // Agrega aquí más campos si tu tabla los tiene

    if (!id) {
        return res.status(400).json({ mensaje: "El ID de la actividad es obligatorio" });
    }
    if (!nombre) {
        return res.status(400).json({ mensaje: "El nombre es obligatorio para actualizar" });
    }

    try {
        const query = 'UPDATE actividades SET nombre = ? WHERE id = ?';
        const [result] = await db.query(query, [nombre, id]);

        // Verifica si realmente se modificó una fila
        const filasAfectadas = result.affectedRows ?? result.rowCount;

        if (filasAfectadas === 0) {
            return res.status(404).json({ mensaje: "Actividad no encontrada" });
        }

        res.status(200).json({ mensaje: "Actividad actualizada correctamente" });
    } catch (e) {
        console.error("ERROR GENERAL: ", e);
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
};

const deleteAct = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ mensaje: "El ID de la actividad es obligatorio" });
    }

    try {
        const query = 'DELETE FROM actividades WHERE id = ?';
        const [result] = await db.query(query, [id]);

        // MySQL usa affectedRows, PostgreSQL usa rowCount
        const filasAfectadas = result.affectedRows ?? result.rowCount;

        if (filasAfectadas === 0) {
            return res.status(404).json({ mensaje: "Actividad no encontrada" });
        }

        res.status(200).json({ mensaje: 'Actividad eliminada correctamente' });
    } catch (e) {
        console.error("ERROR GENERAL: ", e);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

// Si no lo tienes ya, exporta los controladores:
module.exports = { 
    createAct, 
    updateAct, 
    deleteAct 
};