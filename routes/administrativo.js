const express = require('express');
const administrativo = express.Router();
const bd = require('../config/database');

administrativo.post('/register', async (req, res, next) => {

    const { numEmpleado, nombre, apellido, area, correo, telefono } = req.body;

    if (numEmpleado && nombre && apellido && area && correo && telefono) {

        let query = "INSERT INTO administrativo (numEmpleado, nombre, apellido, area, correo, telefono) "
        query += `VALUES ('${numEmpleado}', '${nombre}','${apellido}','${area}','${correo}','${telefono}')`;
        const rows = await bd.query(query)

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Administrativo agregado correctamente" })
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" })
    }

    return res.status(500).json({ code: 500, message: "Datos incompletos" })
})


module.exports = administrativo;