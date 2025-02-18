// ## 📌 Passo a Passo - Callbacks: Funções Passadas como Parâmetro

// ### 🎯 Objetivo:
// Explicar como um **callback** é uma função passada como argumento para outra função.

function executar(somar) {
    console.log("A soma é: " + somar(5, 3)); // Chama a função passada como argumento
}

// Função de soma
function somar(a, b) {
    return a + b;
}

// Chama a função 'executar', passando a função 'somar' como argumento
executar(somar);


function executar2(funcao) {
    console.log("Executando a função...");
    funcao();
}

executar2(() => console.log("Olá, sou um callback!"));

// 💡 **Atividade:** 
// Criar uma função `processar` que recebe um número e um callback que retorna o triplo do número.

function processar(num, resultado) {
    console.log(resultado(num));
}

function resultado(num){
    return num * 3;
}

processar(5, resultado);