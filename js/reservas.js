//Alerta de validação dos inputs

// Pegue os valores dos inputs
const cadastro = document.getElementById("input-cadastro").value;
const senha = document.getElementById("input-senha").value;
function alertasInputs() {
    // Se o cadastro ou a senha estiverem vazios, mostre um alerta 
    if (cadastro == "" || senha == "") {
        alert("Por favor, preencha todos os campos obrigatórios antes de confirmar.");
        // event.preventDefault(); // Previne o envio do formulário
    }
}

// // Selecione o botão de confirmação e adicione um ouvinte de eventos para chamar a função antes do envio do formulário
// const btnConfirmar = document.querySelector(".btn-confirmar");
// btnConfirmar.addEventListener("click", alertasInputs);


 

