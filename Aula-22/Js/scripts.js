let pessoa1 = {
  idioma: "frances",
};

let pessoa2 = {};

Object.assign(pessoa2, pessoa1);
console.log(pessoa2);

let carro1 = {
  cor: "Verde",
  temTeto: true,
  getNome() {
    console.log("Este é a cor do objeto " + this.cor);
  },
};

let carro2 = {};

Object.assign(carro2, carro1);
console.log(carro2);

carro2.getNome();
