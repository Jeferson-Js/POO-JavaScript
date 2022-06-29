let valor = "numero_de_";

let carro = {
  [valor + "portas"]: 4,
};

console.log(carro);

// destructuring

let pessoa = {
  nome: "Jeferson",
  idade: 29,
  idioma: "Frances",
  alto: true,
};

let { nome, idade, idioma, alto } = pessoa;

console.log(nome);
console.log(idade);
console.log(idioma);
console.log(alto);
console.log(pessoa);

// Destructuring 2

let robo = {
  nomeR: "xyz",
  arma: "Canhão",
  rapido: true,
};

let nomeR = "XR8";
let arma = "Foguete";

console.log(nomeR, arma);

({ nomeR, arma } = robo);

// Destructuring 3

let frutas = ["Melancia", "Banana", "Morango"];

let [morango, melancia, banana] = frutas;

console.log(morango, banana, melancia);


