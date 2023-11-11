// 1 - movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecinando por tag

const listItens = document.getElementsByTagName("li");

// 3 - selecinando elementos por getElemntByID

const title = document.getElementById("title");

// 4 - selecioando elementos por class

const products = document.getElementsByClassName("products");

// 5 - selecionando os elementos por css

const productsquery = document.querySelectorAll(".product");

console.log(productsquery);

const maincontainer = document.querySelector("#main-container");

console.log(maincontainer);

// 6 - insertbefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendchild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo title";

header.replaceChild(h2, title);

//  9 - createTextNode

const mytext = document.createTextNode("agora vamos colocar mais um titulo");

console.log(mytext);

const h3 = document.createElement("h3");

h3.appendChild(mytext);

console.log(h3);

maincontainer.appendChild(h3);

// 10 - trabalahndo com atributos

const firsLinks = navLinks.querySelector("a");

console.log(firsLinks);

firsLinks.setAttribute("href", "https://www.google.com");

console.log(firsLinks.getAttribute("href"));

firsLinks.setAttribute("target", "_blank");

// 11 - altura e largura

const footer = document.querySelector("footer");

console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 -  posição do elemento

//const product1 = products[0];

//console.log(product1.getBoundingClientRect());

// 13 - css com js

maincontainer.style.color = "red";
maincontainer.style.backgrundColor = "#333";
maincontainer.style.paddingBottom = "15px";

// 14 - aletrando stilos de varios elemntos.

for (const li of listItens) {
    li.style.backgroundColor = "red";
}


