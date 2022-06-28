function HomemAranha(nome, teia) {
  this.nome = nome;
  this.estoqueDeTeia = teia;
  this.soltaTeia = function (inimigo) {
    if (this.estoqueDeTeia > 0) {
      console.log("O homem aranha soltou teia");
      this.estoqueDeTeia -= 1;
      inimigo.vivo = false;
    } else {
      console.log("A teia do homem aranha acabou");
    }
  };
}

function Venon(nome) {
  this.nome = nome;
  this.vivo = true;
}

let homemAranha = new HomemAranha("Homem Aranha", 3);

let inimigo = new Venon("Venom");
console.log(homemAranha);

console.log(inimigo);

homemAranha.soltaTeia(inimigo);
homemAranha.soltaTeia(inimigo);
homemAranha.soltaTeia(inimigo);
homemAranha.soltaTeia(inimigo);
console.log(inimigo);
