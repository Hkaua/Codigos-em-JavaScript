// 1- Number
console.log(typeof 5);
console.log(typeof 5.14);
console.log(typeof -666);

// 2 - ops. aritimeticas

console.log(2 + 4);
console.log(10 - 5);
console.log(2 / 0);
console.log(5 * 9);
console.log(8798789876452132165412 * 8795454129999999993);

// 3 - Special Numbers

console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "ads");

console.log(typeof NaN);

// 4 - Strings

console.log("um texto");
console.log("texto");

console.log(typeof "texto");

// 5 - simbolos especiais em Strings

console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação

console.log("oi, " + "tudo" + " bem?");

console.log("Testando" + " com" + " crase");

// 7 - interpolação / template strings

console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Booleans

console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - Comparação

console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - comparação de identicos

console.log(9 == "9");

console.log(9 + "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores lógicos

console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Kauã" === 1);

console.log(5 > 2 || "Kauã" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Conversão de tipo automática

console.log(5 * null);

console.log("teste" * "poll");

console.log("10" + 1);

console.log("10" - 1);
