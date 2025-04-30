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
});