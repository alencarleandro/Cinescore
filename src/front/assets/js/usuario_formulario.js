// Ambiente de desenvolvimento (local)
const API_BASE_URL = 'http://localhost:8080';
// Ambiente de produção (Render) - altere para a URL do seu backend
// const API_BASE_URL = 'https://SEU-BACKEND.onrender.com';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formularioPreferencias').onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            generoFavorito: formData.get('generosPreferidos'),
            classificacaoIndicativa: formData.get('classification'),
            plataformaFavorita: formData.get('plataformasStreaming')
        };

        console.log('Dados a serem enviados:', data);

        try {
            const response = await fetch(`${API_BASE_URL}/api/preferencias`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const result = await response.json();
                console.log('Formulário cadastrado:', result);
                // Exibe o alert com mensagem de sucesso
                alert('Formulário cadastrado com sucesso!');
            } else {
                console.error('Erro ao cadastrar formulário:', response.status);
                // Exibe o alert com mensagem de erro
                alert('Erro ao cadastrar formulário. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            // Exibe o alert com mensagem de erro
            alert('Erro na requisição. Tente novamente.');
        }
    };
});
