
const imageRTOnline = document.getElementById('rtonline');
const imageSaraiva = document.getElementById('saraiva');
const imageTirant = document.getElementById('tirant');
const imageBdtd = document.getElementById('bdtd');
const imagePeriodicos = document.getElementById('acessolivre');
const imageDominioPublico = document.getElementById('dominiopublico');

const titleRTOnline = document.querySelector('.rtonline');
const titleSaraiva = document.querySelector('.saraiva');
const titleTirant = document.querySelector('.tirant');
const titleBdtd = document.querySelector('.bdtd');
const titlePeriodicos = document.querySelector('.periodicos');
const titleDominioPublico = document.querySelector('.dominiopublico');


imageRTOnline.addEventListener('mouseover', function () {
    titleRTOnline.style.display = 'flex';
});
imageRTOnline.addEventListener('mouseout', function () {
    titleRTOnline.style.display = 'none';
});


imageSaraiva.addEventListener('mouseover', function () {
    titleSaraiva.style.display = 'flex';
});
imageSaraiva.addEventListener('mouseout', function () {
    titleSaraiva.style.display = 'none';
});

imageTirant.addEventListener('mouseover', function () {
    titleTirant.style.display = 'flex';
});
imageTirant.addEventListener('mouseout', function () {
    titleTirant.style.display = 'none';
});

imageBdtd.addEventListener('mouseover', function () {
    titleBdtd.style.display = 'flex';
});
imageBdtd.addEventListener('mouseout', function () {
    titleBdtd.style.display = 'none';
});

imagePeriodicos.addEventListener('mouseover', function () {
    titlePeriodicos.style.display = 'flex';
});
imagePeriodicos.addEventListener('mouseout', function () {
    titlePeriodicos.style.display = 'none';
});

imageDominioPublico.addEventListener('mouseover', function () {
    titleDominioPublico.style.display = 'flex';
});
imageDominioPublico.addEventListener('mouseout', function () {
    titleDominioPublico.style.display = 'none';
});


const iconEmpty = document.getElementById('infos-horarios');
const containerHorarios = document.querySelector('.horarios');

iconEmpty.addEventListener('mouseover', function () {
    containerHorarios.style.display = 'flex';
});
iconEmpty.addEventListener('mouseout', function () {
    containerHorarios.style.display = 'none';
});




//alertas de validação dos inputs
function alertasInputs() {
    const inputBiblio = document.getElementById('geral');
    const inputMidia = document.getElementById('midia');
    const inputPesquisarPor = document.getElementById('pesquisar-por');
    const inputArgumento = document.getElementById('argumento');

    if (inputBiblio.value == 'empty' ||
        inputMidia.value == 'empty' ||
        inputPesquisarPor.value == 'empty' ||
        inputArgumento.value == '') {
        alert('Preencha todos os campos do Formulário de Pesquisa.');
    } else {
        alert('pesquisa');
    }

}


//função para exibir o modal de confirmacao
function exibeCancel() {
    const modalConfirmacao = document.querySelector('.modal-confirmacao');
    modalConfirmacao.style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}


//função para resetar o formulário qdo clicar no botao de cancelar
function resetaForm() {
    const inputBiblio = document.getElementById('geral');
    const inputMidia = document.getElementById('midia');
    const inputPesquisarPor = document.getElementById('pesquisar-por');
    const inputArgumento = document.getElementById('argumento');
    const modalConfirmacao = document.querySelector('.modal-confirmacao');
    const overlay = document.getElementById('overlay');

    inputBiblio.value = 'empty';
    inputMidia.value = 'empty';
    inputPesquisarPor.value = 'empty';
    inputArgumento.value = '';
    modalConfirmacao.style.display = 'none';
    overlay.style.display = 'none';
}


//função para confirmar e fazer pesquisa
function voltarForm() {
    const modalConfirmacao = document.querySelector('.modal-confirmacao');
    const overlay = document.getElementById('overlay');

    modalConfirmacao.style.display = 'none';
    overlay.style.display = 'none';
}

