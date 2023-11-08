console.log("Propramação Assíncrona");

// 1 - SetTimeout

console.log("Ainda não executou");

setTimeout(function () {
    console.log("requisição assícrona");
}, 2000);

console.log("ainda não executou 2");

// 2 - setInterval

console.log("ainda não começou");

//setInterval(function () {
//   console.log("oiii");
//}, 3000);

console.log("ainda não começou");

// 3 - PRomises

const promessa = Promise.resolve(5 + 5);

console.log("alguma código");

promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`));

console.log("outro código");

// 4 - erro na promese

Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("valores invvaliods");
        }
    })
    .catch((err) => console.log(`um erro ocorreu: ${err}`));

// 5 - rejeição

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`o número é maior que 10`);
        } else {
            reject(new Error("número muito baixo"));
        }
    });
}

const a = checkNumber(20);

const b = checkNumber(10);

a.then((v) => console.log(`o resultado é ${v}`)).catch((err) =>
    console.log(`em erro ocorreu: ${err}`)
);
b.then((v) => console.log(`o resultado é ${v}`)).catch((err) =>
    console.log(`em erro ocorreu: ${err}`)
);

// 6 - resolvendo varias promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10);
    }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("erro!");
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - Async functions

async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

console.log("teste async");

// 8 -instrução de await

function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolveu a promessa");
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("chamando a promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`o resultado chegou: ${result}`);
}
chamadaAsync();

// 9 - generators

function* genarator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = genarator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
