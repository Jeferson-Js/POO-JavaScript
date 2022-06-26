let pessoa = {
  name: "bob",
  age: 29,

  animersario() {
    this.age += 1;
  },
  dizerIdade() {
    console.log("A minha idade é " + this.age);
  },
  podeDirigir: function () {
    if (this.age >= 18) {
      console.log("Sim você pode dirigir");
    } else {
      console.log("Não pode dirigir ainda");
    }
  },
};
pessoa.podeDirigir();
pessoa.animersario();
console.log(pessoa.age);
pessoa.animersario();
console.log(pessoa.age);
pessoa.animersario();
pessoa.dizerIdade();

const calculadora = {
  numeros: 0,
  somar: function (a, b) {
    this.numeros = a + b;
  },
  subtracao: function (a, b) {
    this.numeros = a - b;
  },
};

calculadora.somar(20, 22);
console.log(calculadora.numeros);

calculadora.subtracao(10, 5);
console.log(calculadora.numeros);
