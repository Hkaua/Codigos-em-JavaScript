// 1 - Variaveis
let nome = "kauã";

console.log(nome);
console.log("Kauã");

nome = "kaua hilton";
console.log(nome);

const idade = 20;

console.log(idade);

// idade = 20;

console.log(typeof idade);

console.log(typeof nome);

// 2 - + variaveis

// let 2teste = "inválido";
// let @teste = "inválido";

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleto = "kauã Hilton";

const nomeCompleto = "Hilton kauã";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - Função - Prompt

// const age = prompt("Digite a sua idade:");

// console.log(`voce tem ${age} anos.`);

// 4 - alert

// alert("Testando");

// const z = 10;

// alert(`O número é ${z}`);

// 5 - Math.x

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5, 2, 1, 10));

console.log(Math.ceil(5, 14));

// 6 - console

console.log("teste!");

console.error("error");

console.warn("Aviso!");

// 7 - Estrututa de controle - if

const m = 10;

if (m > 5) {
    console.log("m  maior que 5");
}

const user = "joao";

if (user === "joao") {
    console.log(" não é o joao é o kaua");
}

if (user === "Maria") {
    console.log(" oi, maria");
}

console.log(user === "joao", user === "maria");

// 8 - Estrututa de controle - else,

const loggedIn = false;

if (loggedIn) {
    console.log("Está autenticado");
} else {
    console.log("não esta autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Núemros mais altos");
} else {
    console.log("Os Números não são mais altos");
}

// 9 - Estrutura condicional - else | if

if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("agora sim");
}

const userName = "kaua";
const UserAge = 20;

if (userName === "paulo") {
    console.log("olá, paulo");
} else if (userName === "kaua") {
    console.log("olá, kaua. voce tem 20 anos");
} else {
    console.log("Nenhuma condição aceita");
}

// 10 - while

let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito

// let x = 10;

// while (x > 5) {
//  console.log(`Imprimindo ${x}`);
//

// 11 - Do while

let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);

// 12 - For;

for (let t = 0; t < 10; t++) {
    console.log("repetindo algo...");
}

let r = 10;

for (r; r > 0; r = r - 1) {
    console.log(`o r esta diminuindo ${r}`);
}

// 13 - Identação

for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! $(u)`);
    } else {
        if (u / 2 === 0) {
            console.log("deu 0");
        }
    }
}

// 14 - break

for (let g = 20; g > 10; g--) {
    console.log(`o valor de g é: ${g}`);

    if (g === 15) {
        console.log("o g é 15!");
        break;
    }
}

// 15 - contitue

for (let s = 1; s < 10; s = s + 1) {
    if (s % 2 === 0) {
        console.log("Nuemero par!");
        continue;
    }
    console.log(s);
}

// 16 - switch

const job = "Advogado";

switch (job) {
    case "Progranador":
        console.log("voce é um programador");
        break;
    case "Advogado":
        console.log("voce é um Advodago");
        break;
    case "Engenheiro":
        console.log("voce é um engenheiro");
        break;
    case "medico":
        console.log("voce é ummmedioco");
        break;
    default:
        console.log("Profissão não encontrada");
}

const j = "asd";

switch (j) {
    case "Progranador":
        console.log("voce é um programador");
        break;
    case "Advogado":
        console.log("voce é um Advodago");
        break;
    case "Engenheiro":
        console.log("voce é um engenheiro");
        break;
    case "medico":
        console.log("voce é ummmedioco");
        break;
    default:
        console.log("Profissão não encontrada");
}

// switch "errado"

const l = 100

switch(l) {
    case 200:
        console.log("L é 200!");
        case 100:
            console.log("L é 200!");
            case 10:
                console.log("L é 200!");
                default:
                    case 200:
                        console.log("L não encontrado");
}
