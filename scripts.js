document.addEventListener("DOMContentLoaded", function() {
    // Função para envio do formulário via Formspree
    document.getElementById('contact-form').addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const form = this;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mwpvbgoo", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                form.reset(); // Limpa o formulário após envio
            } else {
                alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
            }
        } catch (error) {
            alert("Erro na conexão. Verifique sua internet.");
        }
    });

    // Variável para controlar o índice do projeto ativo
    let currentProjectIndex = 0;

    // Função para navegar entre os projetos
    function navigateProjects(direction) {
        const projects = document.querySelectorAll('.project');
        const totalProjects = projects.length;

        // Remove a classe 'active' do projeto atual
        projects[currentProjectIndex].classList.remove('active');

        // Atualiza o índice com base na direção
        currentProjectIndex += direction;

        // Garante que o índice fique dentro dos limites
        if (currentProjectIndex < 0) {
            currentProjectIndex = totalProjects - 1;
        } else if (currentProjectIndex >= totalProjects) {
            currentProjectIndex = 0;
        }

        // Adiciona a classe 'active' ao novo projeto
        projects[currentProjectIndex].classList.add('active');
    }

    // Botões de navegação de projetos
    document.querySelectorAll(".prev-button").forEach(button => {
        button.addEventListener("click", function() {
            navigateProjects(-1);
        });
    });

    document.querySelectorAll(".next-button").forEach(button => {
        button.addEventListener("click", function() {
            navigateProjects(1);
        });
    });

    // Animação do logo girando automaticamente
    const logo = document.querySelector(".logo");
    if (logo) {
        setInterval(() => {
            logo.style.transform = `rotate(${Date.now() / 50}deg)`;
        }, 50);
    }
});
