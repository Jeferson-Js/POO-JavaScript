function heroi(nome, poderes) {
  this.nome = nome;
  this.poderes = poderes;
}

let homemAranha = new heroi("Piter Parker", "Teia");
console.log(homemAranha);

console.log(homemAranha.constructor);
