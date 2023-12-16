window.load = init;

function init() {
    document.querySelector('.btn-primary').addEventListener('click', test)
}

function test() {


    var q1 = document.getElementById('options-q1').value
    var q2 = document.getElementById('options-q2').value
    var q3 = document.getElementById('options-q3').value
    var q4 = document.getElementById('options-q4').value
    var q5 = document.getElementById('options-q5').value
    var q6 = document.getElementById('options-q6').value
    var q7 = document.getElementById('options-q7').value
    var q8 = document.getElementById('options-q8').value
    var q9 = document.getElementById('options-q9').value
    var q10 = document.getElementById('options-q10').value
    var q10 = document.getElementById('options-q10').value
    var exp = document.getElementById('input-nombre').value


    axios({
        method: 'patch',
        url: 'http://localhost:3000/estudiantes/test',
        data: {
            satisfaccion_servicio: q1,
            capacidad_respuesta: q2,
            efectividad_resolucion: q3,
            claridad_informacion: q4,
            consistencia_calidad: q5,
            amabilidad_cortesia: q6,
            utilidad_documentacion: q7,
            puntualidad_entrega: q8,
            satisfaccion_resolucion_problemas: q9,
            accesibilidad_disponibilidad: q10,
            nombre: exp

        }
    }).then(function (res) {
        if (res.data.code === 200) {
            console.log(res)
            alert("Test Exitoso")
            window.location.href = "login.html"

        } else {
            alert("Ocurrio un error")

        }

    }).catch(function (err) {
        console.log(err)
        alert("Usuario y/o contraseña Incorrectos")
    })
}

