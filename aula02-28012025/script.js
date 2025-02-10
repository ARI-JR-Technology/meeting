let a = 5;
let b = 10;

let soma = a + b;
let c = "true";

console.log(typeof soma);
console.log(typeof c);
console.log(` A soma de ${a} + ${b}: ${soma}`); 

function soma2(a, b){
    soma = a + b;
    return soma;
}

console.log(soma2(10, 20));
