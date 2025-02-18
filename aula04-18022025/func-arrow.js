// ### 📝 Passo 3 - Arrow Functions

// Uma **Arrow Function** é uma forma simplificada de definir funções:

const somar = (a, b) => a + b;
console.log(somar(5, 3)); // Saída: 8

const subtrair = (a, b) => a - b;
console.log(subtrair(5, 3)); // Saída: 2

const multiplica = (a,b) => a * b;
console.log(multiplica(5,3)); // Saída: 15

const dividir = (a,b) => a / b;
console.log(dividir(5,3)); // Saída: 1.6666666666666667

const potencia = (a, b) => {
    return a ** b; // ou Math.pow(a, b);
}
console.log(potencia(5, 3)); // Saída: 125

// Comparação entre as três formas de definir funções:

// - **Função Normal**:
//     - Usa a palavra-chave `function`.
//     - É mais verbosa.
//     - É mais flexível.

// - **Função Anônima**:
//     - Atribui a função a uma variável.
//     - É mais flexível.
//     - É mais verbosa.

// - **Arrow Function**:
//     - Usa a seta `=>`.
//     - É mais concisa.
//     - É mais limitada.

// 💡 **Atividade:** 
// Crie uma função que calcule a raiz quadrada de um número usando Arrow Function.
const raiz = (a) => Math.sqrt(a);
console.log(raiz(25)); // Saída: 5

// Ou

const raizQuadada = a => a ** 0.5;
console.log(raizQuadada(25)); // Saída: 5