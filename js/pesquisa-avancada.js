const idBiblioteca = document.getElementById('biblioteca');
const idMidia = document.getElementById('midia');

function alertaInputs() {
    if (idBiblioteca.value == 'geral' && idMidia.value.length <= 0) {
        alert('Selecione a MÍDIA antes de consultar.');
    }
}