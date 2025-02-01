document.addEventListener("DOMContentLoaded", ()=>{

const mudarCor = document.querySelector("h1");
const lista=document.getElementById("lista");
const btnCurso=document.getElementById(" btnCurso");

mudarCor.addEventListener("mouseover", () => {
  mudarCor.style.backgroundColor = "blue";
  mudarCor.style.color = "white";
});

mudarCor.addEventListener("mouseout", () => {
  mudarCor.style.backgroundColor = "";
  mudarCor.style.color = "";
});
btnCurso.addEventListener("click", () => {
  lista.style.display = listaMenu.style.display === "block" ? "none" : "block";
});


});


// Slider Automático
const slides = document.querySelector(".slides");

let index = 0;

function mudarSlide() {
  index = (index + 1) % 4; // calcula o total de 3 slides
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(mudarSlide, 4000);

