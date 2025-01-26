function formatDate(dateString){
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

document.getElementById('weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const localtime = document.getElementById('localtime');
    const weatherIcon = document.getElementById('weatherIcon');

    try {
        const response = await axios.get(`/weather?city=${city}`);
        console.log('Dados recebidos do servidor:', response.data); // Log dos dados recebidos
        const data = response.data;

        if (data.error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: data.error,
            });
            return;
        }

        cityName.textContent = `Cidade: ${data.city}`;
        temperature.textContent = `Temperatura: ${data.temperature}°C`;
        description.textContent = `Condições: ${data.description}`;
        localtime.textContent = `Horário: ${formatDate(data.localtime)}`;
        weatherIcon.src = data.icon;
        weatherResult.style.display = 'block';
    } catch (error) {
        console.error('Erro no front-end:', error.message);
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Erro ao buscar dados do clima.',
        });
    }
});