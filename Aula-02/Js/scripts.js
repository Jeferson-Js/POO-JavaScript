let carro = {
  portas: 4,
  cor: "vermelho",
};

console.log(typeof carro);
console.log(carro.portas);
console.log(carro.cor);

if (carro.portas > 2) {
  console.log("Este carro tem mais de 2 portas!");
}

let pessoa = {
  name: "Jeferson",
  programer: "JavaScript",
};

console.log(pessoa["name"]);
console.log(pessoa.name);

if (pessoa.programer == "JavaScript") {
  console.log("Yes Jeferson is programer JavaScript");
} else {
  console.log("Yes Jeferson is programer PHP");
}

(let = namePessoa = pessoa["name"]), console.log(namePessoa.length);

(let = programerPessoa = pessoa["programer"]),
  console.log(programerPessoa.length);

let = programaerPesoa = pessoa['programer'] 

if(pessoa.programer){
    document.body.style.backgroundColor = "#0f0";
    console.log(programaerPesoa.length);
}