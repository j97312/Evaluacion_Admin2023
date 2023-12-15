window.onload = init;

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function () {
        window.location.href = "login.html"
    })

    document.querySelector('.btn-primary').addEventListener('click', signin)
}

function signin() {

    var expediente = document.getElementById('input-expediente').value
    var nombre = document.getElementById('input-name').value
    var apellido = document.getElementById('input-apellidos').value
    var carrera = document.getElementById('input-carrera').value
    var mail = document.getElementById('input-mail').value
    var phone = document.getElementById('input-phone').value
    var nip = document.getElementById('input-nip').value


    axios({
        method: 'post',
        url: 'http://localhost:3000/estudiantes/register',
        data: {
            expediente: expediente,
            nombre: nombre,
            apellidos: apellido,
            carrera: carrera,
            correo: mail,
            telefono: phone,
            NIP: nip
        }
    }).then(function (res) {
        console.log(res)
        alert("¡Registro Éxitoso!")
        window.location.href = "login.html"
    }).catch(function (err) {
        alert("Datos incompletos o/e Incorrectos")
        console.log(err)
    })
}