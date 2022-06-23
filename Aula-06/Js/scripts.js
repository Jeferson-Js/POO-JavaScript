const robo = {
  bracos: 4,
  pernas: 2,
  arma: "metralhadora",
  arameEspecial: "foguete",
  atira: function () {
    console.log("pew pew pew");
  },
};

robo.atira();

const pessoa = {
  name: "Jeferson",
  job: true,
  falar: function () {
    console.log("Hello my name is Jeferson");
  },
};

if (pessoa.job == false) {
  document.body.style.backgroundColor = "#0f0";
} else {
  document.body.style.backgroundColor = "#000";
}

pessoa.falar();

for (let i = 0; i < pessoa.name.length; i++) {
  console.log(pessoa.name[i]);
}
