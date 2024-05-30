const principalMenuPesquisa = document.querySelector('.pesquisa-menu');
const menuServicos = document.querySelector('.servicos-menu');
const menuReservas = document.querySelector('.reservas-menu');
const menuRenovacoes = document.querySelector('.renovacoes-menu');
const menuAcervos = document.querySelector('.acervo-menu');
const menuDownload = document.querySelector('.download-menu');
const menuNovidades = document.querySelector(".novidades-menu");
const menuFaleConosco = document.querySelector('.faleconosco-menu');

principalMenuPesquisa.addEventListener('click', function() {
    principalMenuPesquisa.style.color = 'var(--verde-claro-dois)';
    menuServicos.style.color = 'var(--branco-ite)';
    menuReservas.style.color = 'var(--branco-ite)';
    menuRenovacoes.style.color = 'var(--branco-ite)';
    menuAcervos.style.color = 'var(--branco-ite)';
    menuDownload.style.color = 'var(--branco-ite)';
    menuNovidades.style.color = 'var(--branco-ite)';
    menuFaleConosco.style.color = 'var(--branco-ite)';
});

menuServicos.addEventListener('click', function() {
    menuServicos.style.color = 'var(--verde-claro-dois)';
    principalMenuPesquisa.style.color = 'var(--branco-ite)';
    menuReservas.style.color = 'var(--branco-ite)';
    menuRenovacoes.style.color = 'var(--branco-ite)';
    menuAcervos.style.color = 'var(--branco-ite)';
    menuDownload.style.color = 'var(--branco-ite)';
    menuNovidades.style.color = 'var(--branco-ite)';
    menuFaleConosco.style.color = 'var(--branco-ite)';
});

menuReservas.addEventListener('click', function() {
    menuReservas.style.color = 'var(--verde-claro-dois)';
    principalMenuPesquisa.style.color = 'var(--branco-ite)';
    menuServicos.style.color = 'var(--branco-ite)';
    menuRenovacoes.style.color = 'var(--branco-ite)';
    menuAcervos.style.color = 'var(--branco-ite)';
    menuDownload.style.color = 'var(--branco-ite)';
    menuNovidades.style.color = 'var(--branco-ite)';
    menuFaleConosco.style.color = 'var(--branco-ite)';
});

menuRenovacoes.addEventListener('click', function() {
    menuRenovacoes.style.color = 'var(--verde-claro-dois)';
    principalMenuPesquisa.style.color = 'var(--branco-ite)';
    menuServicos.style.color = 'var(--branco-ite)';
    menuReservas.style.color = 'var(--branco-ite)';
    menuAcervos.style.color = 'var(--branco-ite)';
    menuDownload.style.color = 'var(--branco-ite)';
    menuNovidades.style.color = 'var(--branco-ite)';
    menuFaleConosco.style.color = 'var(--branco-ite)';
});

menuAcervos.addEventListener('click', function() {
    menuAcervos.style.color = 'var(--verde-claro-dois)';
    principalMenuPesquisa.style.color = 'var(--branco-ite)';
    menuServicos.style.color = 'var(--branco-ite)';
    menuReservas.style.color = 'var(--branco-ite)';
    menuRenovacoes.style.color = 'var(--branco-ite)';
    menuDownload.style.color = 'var(--branco-ite)';
    menuNovidades.style.color = 'var(--branco-ite)';
    menuFaleConosco.style.color = 'var(--branco-ite)';
});

// menuDownload.addEventListener('click', function() {
//     menuDownload.style.color = 'var(--verde-claro-dois)';
//     principalMenuPesquisa.style.color = 'var(--branco-ite)';
//     menuServicos.style.color = 'var(--branco-ite)';
//     menuReservas.style.color = 'var(--branco-ite)';
//     menuRenovacoes.style.color = 'var(--branco-ite)';
//     menuAcervos.style.color = 'var(--branco-ite)';
//     menuNovidades.style.color = 'var(--branco-ite)';
//     menuFaleConosco.style.color = 'var(--branco-ite)';
// });

menuNovidades.addEventListener('click', function() {
    menuNovidades.style.color = 'var(--verde-claro-dois)';
    principalMenuPesquisa.style.color = 'var(--branco-ite)';
    menuServicos.style.color = 'var(--branco-ite)';
    menuReservas.style.color = 'var(--branco-ite)';
    menuRenovacoes.style.color = 'var(--branco-ite)';
    menuAcervos.style.color = 'var(--branco-ite)';
    menuDownload.style.color = 'var(--branco-ite)';
    menuFaleConosco.style.color = 'var(--branco-ite)';
});

menuFaleConosco.addEventListener('click', function() {
    menuFaleConosco.style.color = 'var(--verde-claro-dois)';
    principalMenuPesquisa.style.color = 'var(--branco-ite)';
    menuServicos.style.color = 'var(--branco-ite)';
    menuReservas.style.color = 'var(--branco-ite)';
    menuRenovacoes.style.color = 'var(--branco-ite)';
    menuAcervos.style.color = 'var(--branco-ite)';
    menuDownload.style.color = 'var(--branco-ite)';
    menuNovidades.style.color = 'var(--branco-ite)';
});

// function getWindowSize() {
//     return {
//         width: window.innerWidth,
//         height: window.innerHeight
//     };
// }


// const menuSanduiche = document.getElementById('menu-sanduiche');
// const listaCabecalho = document.querySelector('.ul-lista');
// const cabecalho = document.querySelector('.cabecalho');

// document.getElementById('menu-sanduiche').addEventListener('click', function() {
//     const size = getWindowSize();
//     if (listaCabecalho.style.display == 'flex' && size.width < 1158 ) {
//         listaCabecalho.style.display = 'none';
//         // cabecalho.style.
//     } else {
//         listaCabecalho.style.display = 'flex';
//     }
// });

function getWindowSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

const menuSanduiche = document.getElementById('menu-sanduiche');
const listaCabecalho = document.querySelector('.ul-lista');
const cabecalho = document.querySelector('.cabecalho');

menuSanduiche.addEventListener('click', function() {
    const size = getWindowSize();
    if (size.width < 1158) {
        if (listaCabecalho.style.display === 'flex') {
            listaCabecalho.style.display = 'none';
        } else {
            listaCabecalho.style.display = 'flex';
        }
    }
});

window.addEventListener('resize', function() {
    const size = getWindowSize();
    if (size.width >= 1158) {
        listaCabecalho.style.display = 'flex';
    } else {
        listaCabecalho.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const size = getWindowSize();
    if (size.width >= 1158) {
        listaCabecalho.style.display = 'flex';
    } else {
        listaCabecalho.style.display = 'none';
    }
});