// Função para obter a localização do usuário usando a API de Geolocalização
function getUserLocation() {
    fetch('https://ipinfo.io/json?token=4ba51f0be632c6')
        .then(response => response.json())
        .then(data => {
            const country = data.country; // Obtém o código do país
            redirectUser(country);
        })
        .catch(error => {
            console.error('Erro ao obter a localização:', error);
            // Redirecionar para a página em inglês em caso de erro
            window.location.href = 'english.html';
        });
}

// Função para redirecionar o usuário com base na localização
function redirectUser(countryCode) {
    if (countryCode === 'BR') {
        window.location.href = 'pt-br.html';
    } else {
        window.location.href = 'english.html';
    }
}

// Chamar a função para obter a localização do usuário e redirecionar
getUserLocation();
