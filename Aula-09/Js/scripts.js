let pessoa = {
  nome: "Jeferson",
};

(pessoa.idade = 29),
  (pessoa.falar = function () {
    console.log("Olá");
  });

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.falar);

let carro = {
  tipo: "SUV",
};

(carro.portas = 4), console.log(carro.portas);
console.log(carro);

if (carro.tipo == "SUV") {
  carro.tetoSolar = true;
}

console.log(carro);

carro.acelerar = () => {
  console.log("Vrummmmmm");
};

carro.acelerar();
