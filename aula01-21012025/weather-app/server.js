const express = require('express');
const path = require('path');
const axios = require('axios');
const { error } = require('console');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = 'ca413aaf87c34a01bc7143335251901'; // Substitua pela sua chave da API de tempo.
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/modules', express.static(path.join(__dirname, 'node_modules')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para obter dados do clima
app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'Por favor, forneça o nome de uma cidade.' });
    }

    try {
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}`);
        const weatherData = response.data;

        if (!weatherData || !weatherData.location){
            return res.status(404).json({ error: 'Cidade não encontrada. '});
        }

        console.log('Dados retornados pela API', weatherData); // Log dos dados retornados

        res.json({
            city: weatherData.location.name,
            temperature: weatherData.current.temp_c,
            description: weatherData.current.condition.text,
            localtime: weatherData.location.localtime,
            icon: weatherData.current.condition.icon
        });
    } catch (error) {
        console.error('Erro ao buscar dados do clima:', error.message); // Log do erro
        res.status(500).json({ error: 'Erro ao buscar dados do clima.' });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});