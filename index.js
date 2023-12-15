//Dependences
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routes
const estudiantes = require('./routes/estudiantes')
const admins = require('./routes/administradores')
const administrativos = require('./routes/administrativo')
//Middleware
const cors = require('./middleware/cors')
const index = require('./middleware/index')
const notFound = require('./middleware/notFound');


app.use(cors)
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', index)
app.use("/estudiantes", estudiantes)
app.use("/administrativos", administrativos)
app.use("/admins", admins)
app.use(notFound)
app.listen(3000, () => {
    console.log("Server is running...")
});