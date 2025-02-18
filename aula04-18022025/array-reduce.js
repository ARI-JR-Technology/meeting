// ## 📌 Passo a Passo - Manipulação de Arrays e Métodos Importantes

// ### 🎯 Objetivo:
// Mostrar como manipular **arrays** usando métodos modernos como `.map()`, `.filter()`, `.reduce()` e `.forEach()`.

// Métodos de iteração de arrays:

// - **`.reduce()`**: Executa uma função redutora (fornecida por você) em cada elemento do array, resultando num único valor de retorno.
const numeros = [1, 2, 3, 4, 5];
// Função arrow function para somar os números
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); // Saída: 15

// Sem usar arrow function
const soma2 = numeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0); 
console.log(soma2); // Saída: 15

// Função tradicional para somar os números
function somar(acumulador, num) {
    return acumulador + num;
}
console.log(numeros.reduce(somar, 0)); // Saída: 15