# Aula de Desenvolvimento - 28/01

## O que vamos aprender hoje:

### 1. Ferramentas de Desenvolvimento
- Apresentação do **CodeSandbox** como ambiente de desenvolvimento.
  - Prático e acessível diretamente no navegador.
- Alternativa: **VSCode** para quem preferir trabalhar localmente.

---

### 2. Entrada, Processamento e Saída de Dados
- **Entrada de dados**: Como obter informações do usuário.
- **Processamento**: Manipulação e cálculo com os dados obtidos.
- **Saída de dados**: Exibição dos resultados para o usuário.

#### Exemplos:
```javascript
// Entrada
const numero = prompt("Digite um número:");

// Processamento
const dobro = numero * 2;

// Saída
alert(`O dobro do número é: ${dobro}`);
```

---

### 3. Introdução ao JavaScript
- Breve resumo sobre o JavaScript:
  - Linguagem de programação voltada para web.
  - Interpretada e executada diretamente no navegador.

---

### 4. Saída de Dados
- Métodos para exibir informações ao usuário:
  - `alert()`: Exibe uma mensagem em uma janela de alerta.
  - `console.log()`: Exibe informações no console do navegador.
  - `document.write()`: Insere conteúdo diretamente na página.

#### Exemplos:
```javascript
alert("Olá, Mundo!");
console.log("Mensagem no console");
document.write("Mensagem na página");
```

---

### 5. Entrada de Dados
- Como obter informações do usuário:
  - `prompt()`: Exibe uma janela para o usuário digitar informações.

#### Exemplo:
```javascript
const nome = prompt("Qual o seu nome?");
alert(`Olá, ${nome}! Seja bem-vindo!`);
```

---

### 6. Comentários no Código
- **Comentários de uma linha:** Utilizando `//`.
- **Comentários de múltiplas linhas:** Utilizando `/* */`.

#### Exemplo:
```javascript
// Comentário de uma linha
/* Comentário de várias linhas */
```

---

### 7. Tipos de Dados e Conversões de Tipo
- Principais tipos de variáveis no JavaScript:
  - **Strings**: Representam texto, como "Olá".
  - **Números**: Inteiros ou decimais, como 42 ou 3.14.
  - **Booleanos**: Verdadeiro (true) ou falso (false).
  - **Undefined**: Valor padrão de uma variável não inicializada.
  - **Null**: Representa um valor vazio ou inexistente.
- **Declaração de Variáveis**:
  - `let`: Permite reatribuição e tem escopo de bloco.
  - `const`: Não permite reatribuição e tem escopo de bloco.
  - `var`: Escopo global ou de função (menos recomendado).

#### Exemplos:
```javascript
let idade = 25; // Pode ser alterada
const nome = "João"; // Não pode ser alterada
var cidade = "São Paulo"; // Escopo global ou de função
```
- Verificando o tipo de uma variável com `typeof`.
- Conversão de tipos (exemplo: `Number()`, `String()`).

#### Exemplo:
```javascript
const idade = "25"; // string
const idadeConvertida = Number(idade); // número
console.log(typeof idadeConvertida); // number
```

---

### 8. Atividade Prática 1
**Desafio:** Crie um programa que:
- Leia um número.
- Calcule e informe o dobro desse número.

#### Código:
```javascript
const numero = prompt("Digite um número:");
const dobro = numero * 2;
alert(`O dobro do número é: ${dobro}`);
```

---

### 9. Atividade Prática 2
**Desafio:** Crie um programa que:
- Leia dois números.
- Calcule e informe a soma desses números.

#### Código:
```javascript
const numero1 = prompt("Digite o primeiro número:");
const numero2 = prompt("Digite o segundo número:");
const soma = Number(numero1) + Number(numero2);
alert(`A soma dos números é: ${soma}`);
```

---

### 10. Estrutura Básica do HTML e Integração com JavaScript
- Apresentação de uma página HTML básica com um formulário.

#### Exemplo: Programa "Olá Você!"
**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Programa Olá Você!</title>
</head>
<body>
  <h1>Programa Olá Você!</h1>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" placeholder="Digite seu nome">
  <button onclick="mostrarMensagem()">Mostrar</button>
  <p id="mensagem"></p>

  <script>
    function mostrarMensagem() {
      const nome = document.querySelector('#nome').value;
      document.querySelector('#mensagem').innerText = `Seja bem-vindo, ${nome}!`;
    }
  </script>
</body>
</html>
```

---

### 11. Manipulação do DOM
- Métodos para acessar elementos do DOM:
  - `document.querySelector()`: Seleciona o primeiro elemento que corresponde a um seletor CSS.
    ```javascript
    const elemento = document.querySelector(".classe");
    ```
  - `document.getElementById()`: Seleciona um elemento pelo seu ID.
    ```javascript
    const elemento = document.getElementById("idElemento");
    ```
  - `document.getElementsByClassName()`: Retorna uma coleção de elementos que possuem uma classe específica.
    ```javascript
    const elementos = document.getElementsByClassName("classe");
    ```
  - `document.getElementsByTagName()`: Retorna uma coleção de elementos de uma determinada tag.
    ```javascript
    const elementos = document.getElementsByTagName("div");
    ```
  - `document.querySelectorAll()`: Retorna uma lista de todos os elementos que correspondem a um seletor CSS.
    ```javascript
    const elementos = document.querySelectorAll(".classe");
    ```
- Propriedades e métodos:
  - `innerText`: Define ou retorna o conteúdo textual de um elemento.
    ```javascript
    elemento.innerText = "Novo texto";
    ```
  - `innerHTML`: Define ou retorna o conteúdo HTML interno de um elemento.
    ```javascript
    elemento.innerHTML = "<strong>Texto em negrito</strong>";
    ```
  - `value`: Retorna ou define o valor de um campo de formulário.
    ```javascript
    const valor = input.value;
    ```

#### Exemplo:
```javascript
const titulo = document.querySelector('h1');
titulo.innerText = "Novo Título";
```

---

### 12. Introdução a Eventos e Funções
- Eventos em JavaScript:
  - `onclick`: Chamado quando o elemento é clicado.
    ```javascript
    <button onclick="alert('Você clicou!')">Clique Aqui</button>
    ```
  - `onchange`: Disparado quando o valor de um elemento é alterado.
    ```javascript
    <input type="text" onchange="console.log('Valor alterado')">
    ```
  - `onsubmit`: Acionado quando um formulário é enviado.
    ```javascript
    <form onsubmit="return false">...</form>
    ```
  - Outros eventos úteis:
    - `onmouseover`: Acionado quando o mouse passa sobre um elemento.
    - `onmouseout`: Acionado quando o mouse sai de um elemento.
    - `onkeydown`: Disparado quando uma tecla é pressionada.
    - `onkeyup`: Disparado quando uma tecla é solta.
    - `onload`: Acionado quando a página termina de carregar.

#### Exemplo Completo:
```javascript
function evitarEnvio(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  console.log("Envio prevenido!");
}

function teclaPressionada(event) {
  console.log(`Tecla pressionada: ${event.key}`);
}
```

#### HTML Integrado:
```html
<form onsubmit="evitarEnvio(event)">
  <input type="text" onkeydown="teclaPressionada(event)">
  <button type="submit">Enviar</button>
</form>
```

---

### 13. Operadores Aritméticos e Funções Matemáticas
- Operadores básicos: `+`, `-`, `*`, `/`, `%`.
- Funções da classe `Math`:
  - `Math.round()`: Arredonda um número para o inteiro mais próximo.
    ```javascript
    console.log(Math.round(4.6)); // 5
    ```
  - `Math.floor()`: Arredonda um número para baixo, para o inteiro mais próximo.
    ```javascript
    console.log(Math.floor(4.6)); // 4
    ```
  - `Math.ceil()`: Arredonda um número para cima, para o inteiro mais próximo.
    ```javascript
    console.log(Math.ceil(4.2)); // 5
    ```
  - `Math.random()`: Retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo).
    ```javascript
    console.log(Math.random());
    ```
  - `Math.max()`: Retorna o maior valor entre os números fornecidos.
    ```javascript
    console.log(Math.max(10, 20, 30)); // 30
    ```
  - `Math.min()`: Retorna o menor valor entre os números fornecidos.
    ```javascript
    console.log(Math.min(10, 20, 30)); // 10
    ```
  - `Math.sqrt()`: Retorna a raiz quadrada de um número.
    ```javascript
    console.log(Math.sqrt(16)); // 4
    ```
  - `Math.pow()`: Retorna a base elevada à potência do expoente.
    ```javascript
    console.log(Math.pow(2, 3)); // 8
    ```
  - `Math.abs()`: Retorna o valor absoluto de um número.
    ```javascript
    console.log(Math.abs(-10)); // 10
    ```

#### Exemplos:
```javascript
const aleatorio = Math.random() * 10;
console.log(Math.floor(aleatorio));
const raiz = Math.sqrt(25);
console.log(raiz); // 5
```

---

### 14. Exemplos de Programas com HTML e JavaScript
- **Exemplo 1:** Restaurante JS - Calcula o valor a pagar com base no consumo.
- **Exemplo 2:** Promoção de Supermercado - Calcula descontos com base em quantidades.
- **Exemplo 3:** Calculadora de Veículos - Calcula parcelas e entrada de um veículo.

#### Exemplo de Código Completo - Restaurante JS:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Restaurante JS</title>
</head>
<body>
  <h1>Restaurante JS</h1>
  <label for="preco">Preço por Quilo:</label>
  <input type="number" id="preco" step="0.01">
  <label for="consumo">Consumo (kg):</label>
  <input type="number" id="consumo" step="0.01">
  <button onclick="calcularValor()">Calcular</button>
  <p id="resultado"></p>

  <script>
    function calcularValor() {
      const preco = Number(document.querySelector('#preco').value);
      const consumo = Number(document.querySelector('#consumo').value);
      const valor = preco * consumo;
      document.querySelector('#resultado').innerText = `Total a pagar: R$ ${valor.toFixed(2)}`;
    }
  </script>
</body>
</html>
```
#### Exemplo de Código Completo - Promoção de Supermercado:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Promoção de Supermercado</title>
</head>
<body>
  <h1>Promoção de Supermercado</h1>
  <label for="preco">Preço do Produto:</label>
  <input type="number" id="preco" step="0.01">
  <label for="quantidade">Quantidade:</label>
  <input type="number" id="quantidade">
  <button onclick="calcularPromocao()">Calcular Promoção</button>
  <p id="resultado"></p>

  <script>
    function calcularPromocao() {
      const preco = Number(document.querySelector('#preco').value);
      const quantidade = Number(document.querySelector('#quantidade').value);
      const valor = preco * quantidade;
      const desconto = quantidade >= 3 ? valor * 0.1 : 0;
      const total = valor - desconto;
      document.querySelector('#resultado').innerText = `Valor com desconto: R$ ${total.toFixed(2)}`;
    }
  </script>
</body>
</html>
```

#### Exemplo de Código Completo - Calculadora de Veículos:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Calculadora de Veículos</title>
</head>
<body>
  <h1>Calculadora de Veículos</h1>
  <label for="preco">Preço do Veículo:</label>
  <input type="number" id="preco">
  <button onclick="calcularVeiculo()">Calcular Parcelas</button>
  <p id="entrada"></p>
  <p id="parcelas"></p>

  <script>
    function calcularVeiculo() {
      const preco = Number(document.querySelector('#preco').value);
      const entrada = preco * 0.5;
      const parcela = (preco - entrada) / 12;
      document.querySelector('#entrada').innerText = `Entrada: R$ ${entrada.toFixed(2)}`;
      document.querySelector('#parcelas').innerText = `12 parcelas de: R$ ${parcela.toFixed(2)}`;
    }
  </script>
</body>
</html>
```
---

### Vamos juntos explorar e praticar esses conceitos! 🚀
