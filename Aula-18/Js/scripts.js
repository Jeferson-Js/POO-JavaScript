function Atleta(nome, arteMarcial) {
  (this.nome = nome), (this.arteMarcial = arteMarcial);
}

let floyd = new Atleta("Floyd", "Boxe");
let Jon = new Atleta("Jon Jones", "MMA");
const atletaVerdadeiro = floyd;

console.log(floyd === Jon);
console.log(floyd === atletaVerdadeiro);


