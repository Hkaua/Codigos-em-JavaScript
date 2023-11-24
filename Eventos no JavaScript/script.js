// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento de evento
const title = document.querySelector("#my-title");

title.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.srcElement);
    console.log(e.offsetX);
    console.log(e.pointerType);
});

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    // sem isso acontece a propagação
    e.stopPropagation();
    console.log("Evento 2");
});

// 5 - removendo efeito padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a página");
});

// 6 - Evento de tecla

document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

// 7 - eventos de mouse

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("soltou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou o botão");
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("soltou o botão");
});

/* 8 - movimento de mouse

documen.addEventListener("mousemove", (e) => {
    console.log(`No eixo x: ${e.x}`);
    console.log(`No eixo y: ${e.y}`);
});
 
*/

// 9 - evendo de scroll

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
        console.log("passamos de 200px");
    }
});

// 10 - focus

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("saiu no input");
});

// 11 - evento de carregamento
window.addEventListener("load", () => {
    console.log("Página carregou!");
  });
  
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
  });

  const debounce = (f, delay) => {
    let timeout;
  
    return (...arguments) => {
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(() => {
        f.apply(arguments);
      }, delay);
    };
  };
  
  window.addEventListener(
    "mousemove",
    debounce(() => {
      console.log("Executando a cada 400ms");
    }, 400)
  );