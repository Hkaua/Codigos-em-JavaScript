console.log("Debugs e tratamento de erros");

// 1 - Strict mode

("use strict");

// opa = "teste";

const opa = "teste";

// const underfined = 10;

//delete [].length;

// 2 - console.log

let a = 1;
let b = 2;

if (a == 1) {
    a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if (a > 5) {
    a = 25;
}

console.log(a);

// 3 - debugger

let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executaou o loop");

// debugger;

if (c > 5) {
    c = 25;
}

// 4 - Tratamento de dados

function checkNumber(n) {
    const result = Number(n);
    if (Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return;
    }

    console.log("valor correto!");
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 - Exceptions

let x = 10;

// if (x != 11) {
//   throw new Error("o valor de x não pode ser diferente de 11!");
// }

// 6 - try catch

try {
    const soma = x + y;
} catch (error) {
    console.log(`Erro no programa: ${error}`);
}

// 7 - finally

try {
    const value = checkNumber("1");

    if (!value) {
        throw new error("Valores inválidos");
    }
} catch (error) {
    console.log(`opa, aconteceu um problema: ${error}`);
} finally {
    console.log("O código foi executado!");
}

// 8 - Assertions

function checkArray(arr) {
    if (arr.length === 0) {
        throw new "O array precisa ter elementos"();
    } else {
        console.log(`o array tem ${arr.length} elementos`);
    }
}

// checkArray([]);

checkArray([1, 2, 3]);


