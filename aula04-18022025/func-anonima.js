// ### 📝 Passo 2 - Funções Anônimas

// Uma **função anônima** é uma função sem nome atribuída a uma variável:

const somar = function(a, b) {
    return a + b;
}
console.log(somar(5, 3)); // Saída: 8

const subtrair = function(a, b) {
    return a - b;
}
console.log(subtrair(5, 3)); // Saída: 2

const multiplicar = function(a, b) {
    return a * b;
}
console.log(multiplicar(5, 3)); // Saída: 15

const dividir = function(a, b) {
    return a / b;
}
console.log(dividir(5, 3)); // Saída: 1.6666666666666667

// 💡 **Atividade:** 
// Criar uma função anônima para calcular a potência de um número.

const potencia = function (a, b) {
    return a ** b; // ou Math.pow(a, b);
}