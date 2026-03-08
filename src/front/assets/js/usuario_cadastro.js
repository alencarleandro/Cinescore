// Ambiente de desenvolvimento (local)
const API_BASE_URL = 'http://localhost:8080';
// Ambiente de produção (Render) - altere para a URL do seu backend
// const API_BASE_URL = 'https://SEU-BACKEND.onrender.com';

document.getElementById('usuarioForm').onsubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("senha") == formData.get("confirmarSenha")) {
        const data = {
            nome: formData.get("nomeDeUsuario"),
            email: formData.get("email"),
            dataNascimento: formData.get("dataNascimento"),
            senha: formData.get("senha")
        };

        try {

            const response = await fetch(`${API_BASE_URL}/api/usuarios/cadastrar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                window.location.href = "./usuario_login.html";
            } else {
                const errorMessage = await response.text();
                console.error('Erro ao cadastrar usuário:', errorMessage);
                alert(`Erro: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    } else {
        alert('As senhas não são iguais.');
    }
};
