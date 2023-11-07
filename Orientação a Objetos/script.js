console.log("Orientação a Objetos");

// 1 - metodos

const animal = {
    nome: "Bob",
    latir: function () {
        console.log("au aua");
    },
};

console.log(animal.nome);

animal.latir();

// 2 - mais sobre metodos

const pessoa = {
    nome: "kaua",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("kaua");

console.log(pessoa.getNome());

// 3 - prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototype

const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySeconObject = Object.create(myObject);

console.log(mySeconObject);

console.log(mySeconObject.a);

console.log(Object.getPrototypeOf(mySeconObject) === myObject);

// 5 - classes básicas

const cachorro = {
    raca: null,
    patas: 4,
};

const pastoralemao = Object.create(cachorro);

pastoralemao.raca = "Pastor Alemão";

console.log(pastoralemao);

console.log(pastoralemao.pastas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - funcçao como classe - função construtora

function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "vira lata");

console.log(bob);

const jack = criarCachorro("jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funçoes como classe

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca - raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - Metodos na função construtora

Cachorro.prototype.uivar = function () {
    console.log("Auuuu!");
};

husky.uivar();

// 9 - classes es6

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre as classes

class caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descrevercaminhao() {
        console.log(`este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
    }
}

const scania = new caminhao(6, "vermelha");

console.log(scania);

scania.descrevercaminhao();

caminhao.motor = 4;

const c2 = new caminhao(4, "preta");

console.log(c2);

console.log(c2.motor);

caminhao.prototype.motor = 4.0;

const c3 = new caminhao(6, "azul");

console.log(c3.motor);

// 11 - Override

class humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const kaua = new humano("kaua", 20);

console.log(kaua);

console.log(humano.prototype.idade);

humano.prototype.idade = "nãi definidade";

console.log(kaua.idade);

console.log(humano.prototype.idade);

// 12 - Symbol
class aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotps = Symbol();

aviao.prototype[asas] = 2;

aviao.prototype[pilotps] = 3;

const boeing = new aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotps]);

// 13 - getters e setters

class post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Voce está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new post("algum post", "é um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, javascript , js";

// 14 - Herança

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "shark");

console.log(shark);

console.log(shark.patas);

// 15 - instaceof

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new post("a", "b") instanceof Lobo);


