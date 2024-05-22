function alertasInputs(){
    const cliente = document.getElementById("cliente").value;
    const ra = document.getElementById('ra').value;
    const exemplar = document.getElementById('exemplar').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;

    if(cliente == "" || ra == "" || exemplar == "" || autor == "" || ano == ""){
        alert("Por favor, preencha todos os campos obrigatórios antes de confirmar.");
    }else {
        alert("Renovado com sucesso!");

        //abrir a pagina que recebera renovações 
        function abrirPagina(){
            window.location.href = url;
            abrirPagina = "../pages/recebeRenovacoes.html";
        }
    }

}