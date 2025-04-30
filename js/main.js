// Animação ao rolar
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .team-card, .blog-card');
    
    cards.forEach((card, index) => {
        card.style.setProperty('--order', index);
        card.style.opacity = '1'; // Remove após carregar
    });

    // Botão WhatsApp pulsante
    const whatsappBtn = document.querySelector('.whatsapp-float');
    setInterval(() => {
        whatsappBtn.classList.toggle('pulse');
    }, 3000);

    // Menu mobile
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});