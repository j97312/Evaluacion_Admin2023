const express = require('express');
const app = express();
const bd = require('./config/database');

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.post('/', async (req, res, next) => {

    const { expediente, nombre, apellidos, carrera, correo, telefono} = req.body;
    
    console.log(req.body)


    if(expediente && nombre && apellidos && carrera && correo && telefono && NIP) {
        
        let query = "INSERT INTO estudiantes (expediente, nombre, apellidos, carrera, correo, telefono, NIP) "
        query += `VALUES ('${expediente}', '${nombre}','${apellidos}','${carrera}','${correo}','${telefono}', '${NIP}')`;
        const rows = await bd.query(query)

        if (rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Estudiante agregado correctamente"})
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"})
    }

    return res.status(500).json({code: 500, message: "Datos incompletos"})


})


app.get("/",(req, res, next) =>{
    res.status(200);
    res.send("Bienvenido")
});

app.listen(3000, () => {
    console.log("Server is running...")
});