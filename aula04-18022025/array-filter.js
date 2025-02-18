// ## 📌 Passo a Passo - Manipulação de Arrays e Métodos Importantes

// ### 🎯 Objetivo:
// Mostrar como manipular **arrays** usando métodos modernos como `.map()`, `.filter()`, `.reduce()` e `.forEach()`.

// Métodos de iteração de arrays:

// - **`.filter()`**: Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // Saída: [2, 4]

const numerosImpares = numeros.filter(num => num % 2 !== 0);
console.log(numerosImpares); // Saída: [1, 3, 5]

// Sem usar arrow function
const numerosPares2 = numeros.filter(function(num) {
    return num % 2 === 0;
});
console.log(numerosPares2); // Saída: [2, 4]

const numerosImpares2 = numeros.filter(function(num) {
    return num % 2 !== 0;
});
console.log(numerosImpares2); // Saída: [1, 3, 5]

// 💡 **Atividade:** 
// Criar um array de idades e filtrar somente as maiores de 18.

const idades = [15, 20, 25, 30, 35, 40];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); // Saída: [20, 25, 30, 35, 40]

// Sem usar arrow function
const maioresDeIdade2 = idades.filter(function(idade){
    return idade >= 18;
});
console.log(maioresDeIdade2); // Saída: [20, 25, 30, 35, 40]