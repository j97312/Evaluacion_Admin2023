const express = require('express');
const estudiante = express.Router();
const bd = require('../config/database');


estudiante.post('/login', async (req, res, next) => {

    const { expediente, nip } = req.body

    if (expediente && nip) {

        let query = `SELECT * FROM estudiantes WHERE expediente = '${expediente}' AND nip = '${nip}';`
        const rows = await bd.query(query)

        if (rows.length == 1) {
            return res.status(201).json({ code: 201, message: "Login Exitoso" })
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error al ingresar" })
    }
    return res.status(500).json({ code: 500, message: "Datos incompletos" })
})

estudiante.post('/register', async (req, res, next) => {

    const { expediente, nombre, apellidos, carrera, correo, telefono, NIP } = req.body;

    if (expediente && nombre && apellidos && carrera && correo && telefono && NIP) {

        let query = "INSERT INTO estudiantes (expediente, nombre, apellidos, carrera, correo, telefono, NIP) "
        query += `VALUES ('${expediente}', '${nombre}','${apellidos}','${carrera}','${correo}','${telefono}', '${NIP}')`;
        const rows = await bd.query(query)

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Estudiante agregado correctamente" })
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" })
    }

    return res.status(500).json({ code: 500, message: "Datos incompletos" })
})

estudiante.patch('/test', async (req, res, next) => {

    const {
        satisfaccion_servicio,
        capacidad_respuesta,
        efectividad_resolucion,
        claridad_informacion,
        consistencia_calidad,
        amabilidad_cortesia,
        utilidad_documentacion,
        puntualidad_entrega,
        satisfaccion_resolucion_problemas,
        accesibilidad_disponibilidad,
        nombre
    } = req.body;

    if (satisfaccion_servicio && capacidad_respuesta && efectividad_resolucion &&
        claridad_informacion && consistencia_calidad && amabilidad_cortesia &&
        utilidad_documentacion && puntualidad_entrega && satisfaccion_resolucion_problemas &&
        accesibilidad_disponibilidad && nombre) {

        let query = "UPDATE estudiantes SET ";
        query += `satisfaccion_servicio = '${satisfaccion_servicio}', `;
        query += `capacidad_respuesta = '${capacidad_respuesta}', `;
        query += `efectividad_resolucion = '${efectividad_resolucion}', `;
        query += `claridad_informacion = '${claridad_informacion}', `;
        query += `consistencia_calidad = '${consistencia_calidad}', `;
        query += `amabilidad_cortesia = '${amabilidad_cortesia}', `;
        query += `utilidad_documentacion = '${utilidad_documentacion}', `;
        query += `puntualidad_entrega = '${puntualidad_entrega}', `;
        query += `satisfaccion_resolucion_problemas = '${satisfaccion_resolucion_problemas}', `;
        query += `accesibilidad_disponibilidad = '${accesibilidad_disponibilidad}' `;
        query += `WHERE nombre='${nombre}'`;

        const rows = await bd.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Test realizado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrió un error" });
    }

    return res.status(500).json({ code: 500, message: "Debes rellenar todos los datos" });
});


module.exports = estudiante;