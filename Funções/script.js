// 1 - criando uma função

function minhaFunçao() {
    console.log("testando");
}

minhaFunçao();
minhaFunçao();

const minhaFunçaoEmVariavel = function () {
    console.log("Função em variavel");
};

minhaFunçaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("imrpimindo alguma coisa");

funcaoComParametro("outra funçao");

// 2 - return

const a = 10;
const b = 20;
const c = 30;
const d = 40;
function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// 3 - escopo da função

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da funçãoé: ${y} `);
}

testandoEscopo();

y = 15;

console.log(`y fora da função é: ${y}`);

testandoEscopo();

// 4 - Nested Scopes \ escopo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {
        let m = 30;

        if (true) {
            let m = 40;

            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - Arrow function

const testeArorow = () => {
    console.log("esta é uam arrow function");
};

testeArorow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("par");
        return;
    }
    console.log("Impar");
};

parOuImpar(5);
parOuImpar(10);

// 6 - mais sobre arrow function

const raizQuadrada = (x) => {
    return x * x;
};
console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

console.log(raizQuadrada2(12));

const helloword = () => console.log("hello word");

helloword();

// 7 - parametro opcional

const multiplacation = function (m, n) {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
};

console.log(multiplacation(5));

console.log(multiplacation(2, 4));

const greting = (name) => {
    if (!name) {
        console.log("ola");
        return;
    }

    console.log(`ola ${name}!`);
};

greting();

greting("kaua");

// 8 - default

const customGreeting = (name, greet = "ola") => {
    return `${greet}, ${name}!`;
};

console.log(customGreeting("kaua"));

console.log(customGreeting("debora", "boa noite"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");

repeatText("Agora repete 5 vezes", 5);

// 9 - Closure

function someFunction() {
    let txt = "Alguma cosia";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();

// 10 - mais sobre closure

const multiplicationClouse = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClouse(5);

const c2 = multiplicationClouse(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));

// 11 - recursion

const untilten = (n, m) => {
    if (n > 10) {
        console.log("A funçãoparou de executar!");
    } else {
        const x = n - m;

        console.log(x);

        untilten(n, m);
    }
};

untilten(100, 7);

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`o fatorial do numero ${num} é ${result}`);

