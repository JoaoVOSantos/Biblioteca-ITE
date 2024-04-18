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


imageRTOnline.addEventListener('mouseover', function() {
    titleRTOnline.style.display = 'flex';
});
imageRTOnline.addEventListener('mouseout', function() {
    titleRTOnline.style.display = 'none';
});


imageSaraiva.addEventListener('mouseover', function() {
    titleSaraiva.style.display = 'flex';
});
imageSaraiva.addEventListener('mouseout', function() {
    titleSaraiva.style.display = 'none';
});

imageTirant.addEventListener('mouseover', function() {
    titleTirant.style.display = 'flex';
});
imageTirant.addEventListener('mouseout', function() {
    titleTirant.style.display = 'none';
});

imageBdtd.addEventListener('mouseover', function() {
    titleBdtd.style.display = 'flex';
});
imageBdtd.addEventListener('mouseout', function() {
    titleBdtd.style.display = 'none';
});

imagePeriodicos.addEventListener('mouseover', function() {
    titlePeriodicos.style.display = 'flex';
});
imagePeriodicos.addEventListener('mouseout', function() {
    titlePeriodicos.style.display = 'none';
});

imageDominioPublico.addEventListener('mouseover', function() {
    titleDominioPublico.style.display = 'flex';
});
imageDominioPublico.addEventListener('mouseout', function() {
    titleDominioPublico.style.display = 'none';
});


const iconEmpty = document.getElementById('infos-horarios');
const containerHorarios = document.querySelector('.horarios');

iconEmpty.addEventListener('mouseover', function() {
    containerHorarios.style.display = 'flex';
});
iconEmpty.addEventListener('mouseout', function() {
    containerHorarios.style.display = 'none';
});




//alertas de validação dos inputs
function alertasInputs() {
    const inputBiblio = document.getElementById('geral');
    const inputMidia = document.getElementById('midia');
    const inputPesquisarPor = document.getElementById('pesquisar-por');
    const inputArgumento = document.getElementById('argumento');

    if (inputBiblio.value == 'empty' || inputMidia.value) {
        alert('teste');
    }
}

