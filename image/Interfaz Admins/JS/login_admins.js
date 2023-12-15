window.onload = init;

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function () {
        window.location.href = "signin_admins.html"
    })

    document.querySelector('.btn-primary').addEventListener('click', login)
}

function login() {
    var mail = document.getElementById('input-mail').value
    var nip = document.getElementById('input-nip').value

    axios({
        method: 'post',
        url: 'http://localhost:3000/admins/login',
        data: {
            correo: mail,
            nip: nip
        }
    }).then(function (res) {
        if (res.data.code === 201) {
            alert("Login exitoso")
            window.location.href = "evaluacion_admins.html"
        } else {
            alert("Usuario o contraseña incorrectos")
            window.location.href = "login_admins.html"
        }

    }).catch(function (err) {
        console.log(err)
        alert("Usuario y/o contraseña Incorrectos")
    })
}