const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent = "Você sabia? O JavaScript é uma das linguagens mais utilizadas para criar páginas web interativas!";
}

botao.addEventListener("click", mostrarMensagem);
