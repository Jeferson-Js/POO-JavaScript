function Robo(nome, arma) {
  (this.nome = nome), (this.arma = arma);
}

function Atleta(nome) {
  this.nome = nome;
}

let android1 = new Robo("Z210", "Foguete");
let android2 = new Robo("Jon");

console.log(android1 instanceof Atleta);
console.log(android2 instanceof Robo);
