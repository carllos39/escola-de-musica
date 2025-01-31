  
  // Slider Automático
  const slides = document.querySelector(".slides");
  let index = 0;

  function mudarSlide() {
      index = (index + 1) % 4; // calcula o total de 3 slides
      slides.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(mudarSlide, 4000);