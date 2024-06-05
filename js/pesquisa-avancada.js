const idBiblioteca = document.getElementById('biblioteca');
const idMidia = document.getElementById('midia');
const inputAssunto = document.getElementById('assunto');
const inputAutor = document.getElementById('autor');
const inputColecao = document.getElementById('colecao');
const inputEditora = document.getElementById('editora');
const inputGenero = document.getElementById('genero');
const inputISBN = document.getElementById('isbn');
const inputISSN = document.getElementById('issn');
const inputNotas = document.getElementById('notas');
const inputTombo = document.getElementById('tombo');
const inputTitulo = document.getElementById('titulo');

const arr = [inputAssunto,
             inputAutor,
             inputColecao,
             inputEditora,
             inputGenero,
             inputISBN,
             inputISSN,
             inputNotas,
             inputTombo,
             inputTitulo];

function alertaInputs(e) {
    if (idBiblioteca.value == 'geral' && idMidia.value.length <= 0) {
        alert('Selecione a MÍDIA antes de consultar.');
        e.preventDefault();
    }

    let isAnyFieldFilled = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value.trim() !== '') {
            isAnyFieldFilled = true;
            break;
        }
    }
    if (!isAnyFieldFilled) {
        alert('Preencha ao menos um critério.');
        e.preventDefault();
    }
}