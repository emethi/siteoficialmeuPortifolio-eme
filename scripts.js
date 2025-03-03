document.addEventListener('DOMContentLoaded', () => {
    // Formulário de Contato
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        try {
            const response = await fetch('https://formspree.io/f/mwpvbgoo', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                alert('Erro ao enviar. Tente novamente.');
            }
        } catch (error) {
            alert('Erro de conexão. Verifique sua internet.');
        }
    });

    // Filtros de Projetos
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projects = document.querySelectorAll('.project');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-filter');
            projects.forEach(project => {
                project.style.display = (category === 'all' || project.getAttribute('data-category') === category) ? 'block' : 'none';
            });
        });
    });

    // Modal de Projetos
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', () => {
            const project = button.closest('.project');
            modalImg.src = project.querySelector('img').src;
            modalTitle.textContent = project.querySelector('h3').textContent;
            modalDescription.textContent = project.querySelector('p').textContent;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});
