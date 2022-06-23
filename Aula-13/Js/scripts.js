function criarPessoa(nome, idade, idioma) {
  return {
    nome: nome,
    idade: idade,
    idioma: idioma,
  }
}

let pessoa1 = criarPessoa("Jeferson", 29, "Frances");
let pessoa2 = criarPessoa("Oliveira", 45, "Ingles");

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa1.idade);
console.log(pessoa2.idade);
console.log(pessoa1.idioma);
console.log(pessoa2.idioma);
