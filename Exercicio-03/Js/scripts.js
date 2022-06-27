function Ninja(nome) {
  this.nome = nome;
  this.atiraShuriken = function () {
    console.log("O ninja atirou varias shurikens");
  };
}

let kasaki = new Ninja("Kasaki");
console.log(kasaki);

kasaki.atiraShuriken();
