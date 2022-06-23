let lutador = {
  categoria: "profissional",
  arteMarcial: "Muay thay",
  evento: function () {
    console.log("Lutador de " + this.arteMarcial);
  },
};

lutador.evento();

let boxeador = {
  name: "Floyd",
  categoria: "profissional",
  arteMarcial: "boxe",
  vencedor: 50,
  evento: function () {
    console.log("venceu 50x o campeonato de " + this.arteMarcial);
  },
  venceu: function () {
    for (let i = 50; i > 0; i--) {
      this.evento();
    }
  },
};

boxeador.evento();
