function Ninja(nome, arma) {
  this.nome = nome;
  this.arma = arma;
  this.atiraArma = function () {
    console.log("Atirou a " + this.arma);
  };
}

let ninja1 = new Ninja("Naruto", "Shuriken");

//console.log(ninja1.nome);
//console.log(ninja1.arma);

//ninja1.atiraArma();

let ninja2 = new Ninja("Sasuke", "kunai");

console.log(ninja2.nome);
console.log(ninja2.arma);

ninja2.atiraArma();
