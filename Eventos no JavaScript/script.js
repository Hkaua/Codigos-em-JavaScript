console.log("Eventos do JavaScript ");
// 1 - adiconando elemntos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou Aqui!");
});

// 2 -  removendo evento

const secondBtn = document.querySelector("btn");

function imprimirMensagem() {
    console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click", () => {
    console.log("Evento Removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});
