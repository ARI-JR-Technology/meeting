// ## 📌 Passo a Passo - Manipulação de Arrays e Métodos Importantes

// ### 🎯 Objetivo:
// Mostrar como manipular **arrays** usando métodos modernos como `.map()`, `.filter()`, `.reduce()` e `.forEach()`.

// Métodos de iteração de arrays:

// - **`.map()`**: Cria um novo array com os resultados da chamada de uma função para cada elemento do array.

// ### 📝 Passo 2 - map

// Função tradicional para dobrar os números
function dobrar(num) {
    return num * 2;
}

// Usando a função tradicional no .map()
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(dobrar);

console.log(numeros);  // Saída: [1, 2, 3, 4, 5]
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]


const numeros2 = [1, 2, 3, 4, 5];
const dobrados2 = numeros2.map((num) => {
    return num * 2;
})
console.log(numeros2); // Saída: [1, 2, 3, 4, 5]
console.log(dobrados2); // Saída: [2, 4, 6, 8, 10]

// 💡 **Atividade:** 
// Criar um array de preços e usar `.map()` para aplicar um desconto de 15%.

const precos = [100, 200, 300, 400, 500];
const descontos = precos.map(preco => preco * 0.85);

// Sem usar arrow function
const descontos2 = precos.map(function(preco) {
    return preco * 0.85;
});