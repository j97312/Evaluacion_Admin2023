window.onload = init;

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function () {
        window.location.href = "signin.html"
    })

    document.querySelector('.btn-primary').addEventListener('click', login)
}

function login() {
    var expediente = document.getElementById('input-expediente').value
    var nip = document.getElementById('input-nip').value

    axios({
        method: 'post',
        url: 'http://localhost:3000/estudiantes/login',
        data: {
            expediente: expediente,
            nip: nip
        }
    }).then(function (res) {
        if (res.data.code === 201) {
            window.location.href = "evaluacion.html"
        } else {
            alert("Usuario o contraseña incorrectos")
            window.location.href = "login.html"
        }

    }).catch(function (err) {
        console.log(err)
        alert("Usuario y/o contraseña Incorrectos")
    })
}