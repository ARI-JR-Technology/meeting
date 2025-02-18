// ## 📌 Passo a Passo - Manipulação de Arrays e Métodos Importantes

// ### 🎯 Objetivo:
// Mostrar como manipular **arrays** usando métodos modernos como `.map()`, `.filter()`, `.reduce()` e `.forEach()`.

// Métodos de iteração de arrays:

// - **`.forEach()`**: Executa uma dada função em cada elemento de um array.

// ### 📝 Passo 1 - foreach

// Função padrão para exibir os números
const numeros = [1, 2, 3, 4, 5];

// Usando a função tradicional no .forEach()
numeros.forEach(function(num) {
    console.log(num);
});

// Usando uma arrow function no .forEach()
numeros.forEach(num => console.log(num)); // Saída: 1 2 3 4 5

// 💡 **Atividade:** 
// Criar um array de nomes e imprimir cada nome usando `.forEach()`.
const nomes = ['Ana', 'Maria', 'José', 'Pedro', 'João'];
const exibirNomes = nomes.forEach(nome => console.log(nome)); // Saída: Ana Maria José Pedro João

//sem usar arrow function
const exibirNomes2 = nomes.forEach(function(nome) {
    console.log(nome);
}); // Saída: Ana Maria José Pedro João