/* ===============================
   JHIREFARMA - CARRUSEL PRINCIPAL
   Archivo: src/view/js/home.js
   =============================== */

   document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".flecha.prev");
    const nextBtn = document.querySelector(".flecha.next");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalo = 6000; // 6 segundos para auto-slide
  
    const actualizarCarrusel = (index) => {
      const carousel = document.querySelector(".carousel");
      carousel.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) =>
        dot.classList.toggle("activo", i === index)
      );
    };
  
    const siguiente = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      actualizarCarrusel(currentIndex);
    };
  
    const anterior = () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      actualizarCarrusel(currentIndex);
    };
  
    // Eventos de botones
    nextBtn.addEventListener("click", siguiente);
    prevBtn.addEventListener("click", anterior);
  
    // Click en dots
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        actualizarCarrusel(currentIndex);
      });
    });
  
    // Auto deslizamiento
    let autoSlide = setInterval(siguiente, intervalo);
  
    // Pausa cuando el usuario pasa el mouse
    const hero = document.querySelector(".hero");
    hero.addEventListener("mouseenter", () => clearInterval(autoSlide));
    hero.addEventListener("mouseleave", () => {
      autoSlide = setInterval(siguiente, intervalo);
    });
  
    // Inicializar
    actualizarCarrusel(currentIndex);
  });
  