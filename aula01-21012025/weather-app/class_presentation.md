# Apresentação para Aula Inicial

## 1. Introdução ao Node.js
- **O que é o Node.js?**
  - Uma plataforma para executar JavaScript no servidor.
  - Baseada no motor V8 do Google Chrome.
  - Permite criar servidores web rápidos e eficientes.

- **Onde o Node.js é usado?**
  - Aplicações em tempo real, como chats.
  - APIs RESTful para comunicação entre sistemas.
  - Ferramentas de automação e construção (e.g., Webpack, Gulp).

- **Vantagens do Node.js:**
  - **Assíncrono e não bloqueante**: Ideal para aplicações escaláveis.
  - Grande **ecossistema** de pacotes via `npm`.
  - Rápido e eficiente graças ao motor V8.

---

## 2. O que é uma API?
- **API (Application Programming Interface)**
  - Um conjunto de definições e protocolos para integração entre sistemas.
  - Exemplo: APIs de clima como WeatherAPI fornecem dados climáticos de diversas cidades.

- **Tipos de APIs:**
  - RESTful APIs: Baseadas em HTTP.
  - SOAP APIs: Baseadas em XML.

- **Como usamos APIs neste projeto:**
  - Solicitamos dados climáticos via `GET` para a API WeatherAPI.
  - Usamos a biblioteca Axios para facilitar as requisições.

---

## 3. Estrutura do Projeto
- **Pasta `public/`**:
  - Contém arquivos acessíveis diretamente pelo navegador, como CSS, JS e imagens.

- **Pasta `views/`**:
  - Contém o arquivo `index.html` para renderizar o front-end.

- **Arquivo `server.js`**:
  - Configura o servidor Node.js.
  - Define rotas para o navegador e para as requisições de dados climáticos.

- **Arquivo `app.js`**:
  - Contém a lógica do front-end para buscar dados da API e exibi-los.

---

## 4. Git e GitHub
- **O que é o Git?**
  - Um sistema de controle de versão distribuído.
  - Permite rastrear mudanças no código e colaborar com outros desenvolvedores.

- **O que é o GitHub?**
  - Uma plataforma de hospedagem para repositórios Git.
  - Facilita a colaboração e o versionamento do código.

- **Passos para subir o projeto no GitHub:**
  1. Inicializar o repositório:
     ```bash
     git init
     ```
  2. Adicionar arquivos ao repositório:
     ```bash
     git add .
     ```
  3. Fazer o commit inicial:
     ```bash
     git commit -m "Primeiro commit"
     ```
  4. Conectar ao repositório remoto:
     ```bash
     git remote add origin <URL_DO_REPOSITORIO>
     ```
  5. Enviar para o GitHub:
     ```bash
     git push -u origin main
     ```

---

## 5. Funcionamento do Servidor Local
- O servidor Node.js roda na porta **3000** por padrão.
- Para acessar, use o navegador e insira:
  ```
  http://localhost:3000
  ```
- Arquivos estáticos (CSS, JS, imagens) são servidos diretamente da pasta `public/`.

---

## 6. Detalhamento dos Arquivos

### Arquivo `server.js`
- Configura o servidor com **Express**:
  - Serve arquivos estáticos.
  - Define uma rota para buscar dados da API de clima.
- Código:
  ```javascript
  app.get('/weather', async (req, res) => {
      const city = req.query.city;
      const response = await axios.get(`API_URL`);
      res.json(response.data);
  });
  ```

### Arquivo `app.js`
- Lida com eventos no front-end:
  - Captura o envio do formulário.
  - Envia uma requisição para o servidor Node.js.
  - Atualiza a interface com os dados recebidos.

### Arquivo `index.html`
- Estrutura do front-end:
  - Formulário para entrada do nome da cidade.
  - Elementos dinâmicos para exibir os resultados (cidade, temperatura, etc.).

---

## 7. Demonstração Prática
- **Passos na aula:**
  1. Explicar o código do servidor (`server.js`).
  2. Mostrar o código do cliente (`app.js`).
  3. Abrir o projeto no navegador e realizar testes inserindo nomes de cidades.
  4. Simular erros para entender como lidar com problemas.

---

Se houver dúvidas durante a aula, estarei disponível para responder! 😊
