# Weather App - Projeto de Previsão do Tempo

Este é um projeto completo de um aplicativo de previsão do tempo, desenvolvido com Node.js, Express, Axios, HTML, CSS e bibliotecas como Bootstrap e Animate.css. O projeto foi pensado para ser intuitivo e com um design dinâmico, e também para ensinar passo a passo sua implementação.

## Estrutura do Projeto
```bash
weather-app/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── images/
│       └── weather-bg.jpg
├── views/
│   └── index.html
├── server.js
├── package.json
└── README.md
```
## Configuração do Ambiente

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd weather-app
```
## Instale as dependências necessárias:

`npm install express axios bootstrap animate.css`

## Passo a Passo de Implementação

1. Configuração do Servidor

No arquivo server.js, configuramos o servidor Express para:

- Servir arquivos estáticos em public/.
- Configurar uma rota para buscar dados da API de clima.

## Código principal do servidor:
```bash
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = 'SUA_API_KEY';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

app.use(express.static(path.join(__dirname, 'public')));
app.use('/modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'Por favor, forneça o nome de uma cidade.' });
    }

    try {
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}`);
        const weatherData = response.data;

        res.json({
            city: weatherData.location.name,
            temperature: weatherData.current.temp_c,
            description: weatherData.current.condition.text,
            icon: weatherData.current.condition.icon
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do clima.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```
2. Estrutura do Front-End

HTML

No arquivo index.html, criamos a interface principal com Bootstrap para estilização e Animate.css para animações.
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="/modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/modules/animate.css/animate.min.css">
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body class="d-flex align-items-center justify-content-center" style="height: 100vh; background-image: url('/images/weather-bg.jpg'); background-size: cover;">
    <div class="container text-center text-light">
        <h1 class="mb-4 animate__animated animate__fadeInDown">Weather App</h1>
        <form id="weatherForm" class="mb-4">
            <input type="text" id="cityInput" class="form-control" placeholder="Digite o nome da cidade" required>
            <button type="submit" class="btn btn-primary mt-3">Buscar</button>
        </form>
        <div id="weatherResult" class="animate__animated animate__fadeInUp" style="display: none;">
            <h2 id="cityName"></h2>
            <p id="temperature"></p>
            <p id="description"></p>
            <img id="weatherIcon" alt="Weather Icon">
        </div>
    </div>
    <script src="/modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>
```
3. Estilos Personalizados

No arquivo styles.css, aplicamos um fundo escuro com opacidade ajustada para a exibição dos resultados:
```bash
body {
    font-family: Arial, sans-serif;
}

#weatherResult {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    color: white;
}
```
4. Lógica do Front-End

No arquivo app.js, utilizamos o axios para buscar dados do servidor ao submeter o formulário. Exibimos os dados retornados dinamicamente na interface.
```bash
document.getElementById('weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherIcon = document.getElementById('weatherIcon');

    try {
        const response = await axios.get(`/weather?city=${city}`);
        const data = response.data;

        cityName.textContent = `Cidade: ${data.city}`;
        temperature.textContent = `Temperatura: ${data.temperature}°C`;
        description.textContent = `Condições: ${data.description}`;
        weatherIcon.src = data.icon;
        weatherResult.style.display = 'block';
    } catch (error) {
        alert('Erro ao buscar dados do clima.');
    }
});
```
5. Executando o Projeto

- Inicie o servidor:

`node server.js`

6. Acesse no navegador:

http://localhost:3000

7. Demonstração

**Campo de pesquisa**: Insira o nome da cidade desejada.

**Resultado**: Veja a temperatura, descrição do clima e um ícone representativo.

**Animações**: A interface utiliza animações para melhorar a experiência do usuário.