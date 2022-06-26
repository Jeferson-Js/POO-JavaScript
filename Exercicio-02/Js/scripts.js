let pessoa = {
  nome: "Jeferson Oliveira",
  ola() {
    console.log("Olá seja muito bem vindo: " + this.nome);
  },
};

console.log(pessoa.nome);
pessoa.ola();
