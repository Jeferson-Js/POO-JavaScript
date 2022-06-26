let pessoa = {
  nome: "Jeferson",
  idade: 20,
  baixo: false,
  caracteristicas: {
    cabelo: "preto",
    olhos: "verdes",
  },
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.baixo);

if (pessoa.nome == "Jeferson") {
  console.log("O nome da pessoa esta correto!!");
} else {
  console.log("O nome da pessoa não esta correto!");
}

