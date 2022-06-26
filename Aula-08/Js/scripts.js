let pessoa = {
  nome: "Jeferson",
  caractristicas: {
    cabelo: "preto",
    olhos: "pretos",
    brincos: false,
    oculos: false,
  },
  habilidades: {
    cnh: true,
    carteira: ["Dinheiro", "Documento", "Moeda"],
  },
};
console.log(pessoa.nome);
console.log(pessoa.caractristicas.oculos);

console.log(pessoa.habilidades.cnh);
console.log(pessoa.habilidades.carteira[1]);
