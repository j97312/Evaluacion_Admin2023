window.onload = init;

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function () {
        window.location.href = "login_admins.html"
    })

    document.querySelector('.btn-primary').addEventListener('click', signin)
}

function signin() {

    var numEmpleado = document.getElementById('input-numEmpleado').value
    var nombre = document.getElementById('input-nombre').value
    var apellido = document.getElementById('input-apellidos').value
    var direccion = document.getElementById('input-direccion').value
    var telefono = document.getElementById('input-telefono').value
    var correo = document.getElementById('input-mail').value
    var nip = document.getElementById('input-nip').value


    axios({
        method: 'post',
        url: 'http://localhost:3000/admins/register',
        data: {
            numEmpleado: numEmpleado,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            telefono: telefono,
            correo: correo,
            nip: nip
        }
    }).then(function (res) {
        console.log(res)
        alert("¡Registro Éxitoso!")
        window.location.href = "login_admins.html"
    }).catch(function (err) {
        alert("Datos incompletos o/e Incorrectos")
        console.log(err)
    })
}