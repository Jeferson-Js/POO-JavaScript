let pessoa1 = {
  nome: "Jeferson",
};

let pessoa2 = {
  nome: "Jeferson",
};

console.log(Object.is(pessoa1, pessoa2)); // === -> False

console.log(Object.is(NaN, NaN)); // === -> True;

console.log(Object.is(+0, -0)); // === - > False

console.log(+0 === -0); // === - > True

let pessoa10 = pessoa1;

console.log(Object.is(pessoa1, pessoa10)); // === -> True
