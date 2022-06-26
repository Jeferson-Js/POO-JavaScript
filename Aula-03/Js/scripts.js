let maquina = {
  material: "Aço inox",
  equipamentos: ["motor,", "freio", "esteira", "cilindro"],
  vaiMontada: false,
  numeroDeMotores: 1,
};

console.log(maquina);
console.log(typeof maquina);
console.log("Esta maquina é feita de:...... " + maquina.material);
console.log(maquina.equipamentos);
console.log(maquina.vaiMontada);
console.log(maquina.numeroDeMotores);
console.log(maquina.equipamentos[2]);
console.log(maquina.equipamentos[0]);
console.log(maquina.equipamentos[3]);

for (let i = 0; i < maquina.equipamentos.length; i++) {
  console.log(maquina.equipamentos[i]);
}

if (maquina.vaiMontada == false) {
  console.log("O comprador precisa montar a maquina");
}
