const express = require('express');
const admin = express.Router();
const bd = require('../config/database');

admin.post('/login', async (req, res, next) => {

    const { correo, nip } = req.body

    if (correo && nip) {

        let query = `SELECT * FROM administrador WHERE correo = '${correo}' AND nip = '${nip}';`
        const rows = await bd.query(query)

        if (rows.length == 1) {
            return res.status(201).json({ code: 201, message: "Login Exitoso" })
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error al ingresar" })
    }
    return res.status(500).json({ code: 500, message: "Datos incompletos" })
})

admin.post('/register', async (req, res, next) => {

    const { numEmpleado, nombre, apellido, direccion, telefono, correo, nip } = req.body;

    if (numEmpleado && nombre && apellido && direccion && telefono && correo && nip) {

        let query = "INSERT INTO administrador (numEmpleado, nombre, apellido, direccion, telefono, correo, nip) "
        query += `VALUES ('${numEmpleado}', '${nombre}','${apellido}','${direccion}','${telefono}', '${correo}', '${nip}')`;
        const rows = await bd.query(query)

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Administrador agregado correctamente" })
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" })
    }

    return res.status(500).json({ code: 500, message: "Datos incompletos" })
})

admin.get('/eval', async (req, res, next) => {
    const emp = await bd.query("SELECT * FROM estudiantes")
    res.json({
        data: emp
    })
});

admin.get('/administrativos', async (req, res, next) => {
    const emp = await bd.query("SELECT * FROM administrativos")
    res.json({
        data: emp
    })
});

admin.get('/:id([0-9]{1,3})', async (req, res, next) => {
    const id = req.params.id
    if (id >= 1 && id <= 1000) {
        const emp = await bd.query("SELECT * FROM estudiantes WHERE id=" + id + ";")
        return res.status(200).json({ code: 1, message: emp })
    }
    return res.status(404).send({ code: 404, message: "Empleado no encontrado" })
});

admin.delete('/:name([A-Za-z]+)', async (req, res, next) => {

    const query = `DELETE FROM estudiantes WHERE id=${req.params.name}`;
    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
        return res.status(200).json({ code: 200, message: "Estudiante borrado" })
    }
    return res.status(404).json({ code: 404, message: "Estudiante no encontrado" })
});


module.exports = admin;