function Ninja(nome, quantidade) {
  this.nome = nome;
  this.estoqueShuriken = quantidade;
  this.atiraShuriken = function () {
    console.log("Atirou a shuriken");
    if (this.estoqueShuriken > 0) {
      this.estoqueShuriken -= 1;
      console.log("O ninja atirou a shuriken");
    } else {
      console.log("O ninja não tem mais shuriken disponivel para atacar");
    }
  };
}

let sazuki = new Ninja("Sazuki", 5);
console.log(sazuki);

sazuki.atiraShuriken();
sazuki.atiraShuriken();
sazuki.atiraShuriken();
sazuki.atiraShuriken();
sazuki.atiraShuriken();
sazuki.atiraShuriken();

console.log(sazuki);
