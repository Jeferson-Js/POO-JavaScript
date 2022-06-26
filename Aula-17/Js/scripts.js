let obj = {
  numero: 1000,
};

console.log(obj.numero);

let copia = obj;

console.log(copia.numero);

copia.numero = 200;
console.log(copia);

obj.numero = 300;
console.log(copia);
