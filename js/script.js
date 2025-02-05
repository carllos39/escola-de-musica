document.addEventListener("DOMContentLoaded", () => {

  const mudarCor = document.querySelector("h1");
  const botao = document.getElementById("botao");
  const lista = document.getElementById("lista");

  mudarCor.addEventListener("mouseover", () => {
    mudarCor.style.backgroundColor = "blue";
    mudarCor.style.color = "white";
  });

  mudarCor.addEventListener("mouseout", () => {
    mudarCor.style.backgroundColor = "";
    mudarCor.style.color = "";
  });

  botao.addEventListener("click", () => {
    lista.style.display = lista.style.display === "block" ? "none" : "block";
  });


});


// Slider Automático
const slides = document.querySelector(".slides");

let index = 0;

function mudarSlide() {
  index = (index + 1) % 4;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(mudarSlide, 4000);