//selecionando o botao pelo ID
 const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

//inicializando contator
let contator = 0;

//funcao que sera chamado quando o botao for clicado
function aumentarContador()
{
    contator++;
    contadorElemento.textContent = contator;
}

//Adicionando  ouvinte do evento para clique do botao
botao.addEventListener("click",aumentarContador);