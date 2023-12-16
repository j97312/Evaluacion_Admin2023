window.onload = init;
var headers = {}
var url = "http://localhost:3000"

function init() {
    getresults();
}

function getresults() {
    axios.get(url + "/admins/eval", headers)
        .then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err)
        })
}

// Esta función llena la tabla con los resultados de la encuesta
function fillTable(results) {
    // Obtén la referencia a la tabla
    const table = document.getElementById('results-table');

    // Itera sobre los resultados y llena las celdas de la tabla
    for (let i = 0; i < results.length; i++) {
        const row = table.insertRow(-1); // Inserta una nueva fila al final de la tabla

        // Columna de preguntas
        const questionCell = row.insertCell(0);
        questionCell.textContent = results[i].pregunta;

        // Columna de puntuación (supongamos que los resultados tienen una propiedad llamada 'puntuacion')
        const scoreCell = row.insertCell(1);
        scoreCell.textContent = results[i].puntuacion;
    }
}

// Espera a que el DOM esté completamente cargado antes de llamar a getresults
document.addEventListener('DOMContentLoaded', function () {
    getresults();
});

