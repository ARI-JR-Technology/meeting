# 📌 Plano de Aula - JavaScript: Funções, Callbacks e Manipulação de Arrays

## 📌 Passo a Passo - Tipos de Funções em JavaScript

### 🎯 Objetivo:
Mostrar os diferentes tipos de funções em JavaScript, incluindo 

**funções normais, arrow functions, funções anônimas e callbacks**.

---

### 📝 Passo 1 - Função Normal

A forma tradicional de definir funções em JavaScript é usando a palavra-chave `function`:

```js
function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3)); // Saída: 8
```

💡 **Atividade:** 
Criar uma função normal chamada `multiplicar` que recebe dois números e retorna o produto.

---

### 📝 Passo 2 - Funções Anônimas

Uma **função anônima** é uma função sem nome atribuída a uma variável:

```js
const dividir = function(a, b) {
    return a / b;
};

console.log(dividir(10, 2)); // Saída: 5
```

💡 **Atividade:** 
Criar uma função anônima para calcular a potência de um número.

---

### 📝 Passo 3 - Arrow Functions

Uma **Arrow Function** é uma forma simplificada de definir funções:

```js
const somar = (a, b) => a + b;

console.log(somar(5, 3)); // Saída: 8
```

### **Diferenças:**
- A **Arrow Function** remove a palavra `function` e usa `=>` para definir a função.
- Se houver **apenas um retorno**, não precisa de `{}` nem da palavra `return`.

💡 **Atividade:** 
Transformem a função `dividir` em uma Arrow Function.

---

## 📌 Passo a Passo - Callbacks: Funções Passadas como Parâmetro

### 🎯 Objetivo:
Explicar como um **callback** é uma função passada como argumento para outra função.

💡 **Exemplo:**

```js
function executar(funcao) {
    console.log("Executando a função...");
    funcao();
}

executar(() => console.log("Olá, sou um callback!"));
```

💡 **Atividade:** 
Criar uma função `processar` que recebe um número e um callback que retorna o triplo do número.

---

## 📌 Passo a Passo - Manipulação de Arrays e Métodos Importantes

### 🎯 Objetivo:
Mostrar como manipular **arrays** usando métodos modernos como `.map()`, `.filter()`, `.reduce()` e `.forEach()`.

---

### 📝 Passo 1 - Introdução ao Array e Métodos Básicos

```js
const numeros = [1, 2, 3, 4, 5];
```

Uso de `.forEach()`:

```js
numeros.forEach(num => console.log(num));
```

💡 **Atividade:** 
Criar um array de nomes e imprimir cada nome usando `.forEach()`.

---

### 📝 Passo 2 - `map()`: Modificando Elementos do Array

```js
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]
```

💡 **Atividade:** 
Criar um array de preços e usar `.map()` para aplicar um desconto de 15%.

---

### 📝 Passo 3 - `filter()`: Filtrando Elementos

```js
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // Saída: [2, 4]
```

💡 **Atividade:** 
Criar um array de idades e filtrar somente as maiores de 18.

---

### 📝 Passo 4 - `reduce()`: Somando Valores

```js
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); // Saída: 15
```

💡 **Atividade:** 
Criar um array de salários e calcular a soma total usando `.reduce()`.

---

## ✅ Conclusão da Aula

### 📌 **Resumo do que aprenderam:**
✔ **Funções normais, anônimas e Arrow Functions** têm diferentes sintaxes e usos.  
✔ **Callbacks** são funções passadas como argumentos.  
✔ `.map()`, `.filter()`, `.reduce()`, `.forEach()` são essenciais para manipulação de arrays.  


**Feito com ❤️ por Arimatéia Júnior** 🚀
