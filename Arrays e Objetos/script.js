console.log("Array e objetos");

// 1 - arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["kaua", true, 2, 4, 4.12, []];

console.log(itens);

// 3 - mais sobre arrays

const arr = ["a", "b", "c", "d", "e"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[5]);

// 3 - propriedades

const numbre = [5, 3, 4];

console.log(numbre.length);
console.log(numbre["length"]);

const myName = "kaua";

console.log(myName.length);

// 4 - Métodos

const othernumber = [1, 2, 3];

const allNumber = numbre.concat(othernumber);

console.log(allNumber);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("z"));

// 5 - Object Literals

const person = {
    name: "kaua",
    age: 20,
    job: "aprendiz",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando uma propriedade

const car = {
    engine: 2.0,
    brand: "vw",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos

const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

// 8 - keys e entries

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação

const a = {
    name: "kaua",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 -  Loops em array

const users = ["kaua", "pedro", "joão", "paulo"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 -  Push e Pop

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemremovido = array.pop();

console.log(itemremovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - Shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// 13 - indexOF e lastindexOF

const myElements = ["morango", "pera", "abacate", "pera", "maça"];

console.log(myElements.indexOf("maça"));

console.log(myElements.indexOf("abacate"));

console.log(myElements[2]);

console.log(myElements[myElements.indexOf("acabate")]);

console.log(myElements.lastIndexOf("abacate"));

console.log(myElements.indexOf("pera"));

console.log(myElements.lastIndexOf("pera"));

// 14 - Slice

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(testeSlice);

console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.splice(2);

console.log(subArray4);

// 15 - foreach

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`nuemro é ${numero}`);
});

const posts = [
    { title: "primeiro post", category: "PHP" },
    { title: "segundo post", category: "JAVA" },
    { title: "terceiro post", category: "Pytohn" },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - incluides

const brands = ["bmw", "bw", "fiat"];

console.log(brands.includes("fiat"));

console.log(brands.includes("kia"));

if (brands.includes("bmw")) {
    console.log("ha carros de marca BWM!");
}

// 17 - reverse

const reversetest = [1, 2, 3, 4, 5];

reversetest.reverse();

console.log(reversetest);

// 18 - trim

const trimtest = " testando \n ";

console.log(trimtest);

console.log(trimtest.trim());

console.log(trimtest.length);

console.log(trimtest.trim().length);

// 19 - padStart

const testepadstart = "1";

const newNumber = testepadstart.padStart(4, "0");

console.log(testepadstart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - Split

const frase = "o rato sei la o que do que alguma coisa";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join

const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensparacomprar = ["mouse", "Teclado", "monitor"];

const fraseDeCompra = `precisamos comprar: ${itensparacomprar.join(", ")}.`;

console.log(fraseDeCompra);

// 22 - repeat

const palavra = "testando";

console.log(palavra.repeat(5));

// 23 -  rest Operator

const somaInfitita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};

console.log(somaInfitita(1, 2, 3));

console.log(
    somaInfitita(
        1,
        20,
        30,
        1486,
        54786,
        8798541,
        4987561321,
        8979854648979,
        8765435,
        99999999999,
        99,
        8787445451231231237987879879645123123123
    )
);

// 24 - for..of

const somaInfitita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }
    return total;
};

console.log(somaInfitita2(1, 2, 3));

console.log(somaInfitita2(5, 6, 1, 23, 65, 63, 3, 5));

// 25 -  destructuring em objetos

const userDetails = {
    firsName: "kauã",
    lastName: "hilton",
    job: "programador",
};

const { firsName, lastName, job } = userDetails;

console.log(firsName, lastName, job);

// renomerar variaveis

const { firsName: primeiroNome } = userDetails;

console.log(firsName);

// 26 - destructuring com arrays

const myList = ["avião", "submarino", "carro", "moto"];

const [veiculaA, veiculoB, veiculaC] = myList;

console.log(veiculaA, veiculoB, veiculaC);

// 27 - Json

const myJson =
    '{"name": "mateus", "age": 31, "skills": ["PHP", "javascript", "Python"]}';

console.log(myJson);

console.log(typeof myJson);

// 28 - json para obj e obj para json

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

// json invalido

// const badJson = '{"name": mateus, "age": 20}';

// onst myBadObject = JSON.parse(badJson);

// myObject.isOprenTowork = true;

// console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);
