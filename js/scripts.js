document.addEventListener('DOMContentLoaded', () => {
  // Redirección a las páginas de servicio
  function redirectTo(page) {
    window.location.href = `templates/${page}`;
  }

  // Asigna la función de redirección a cada tarjeta
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function () {
      const page = this.getAttribute('onclick').match(/'([^']+)'/)[1];
      redirectTo(page);
    });
  });

  // Configuración del carrusel
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Inicializar carrusel y configurar intervalo automático
  slides[currentSlide].classList.add('active');
  setInterval(() => {
    nextSlide();
  }, 4000);

  // Botones de navegación del carrusel
  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);
});
