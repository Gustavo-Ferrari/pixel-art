/* eslint-disable complexity */
const black = document.querySelector("#preto");
const red = document.querySelector("#vermelho");
const blue = document.querySelector("#azul");
const green = document.querySelector("#verde");

// .className.replace pesquisado no W3Schools como forma de trocar uma classe para outro elemento https://www.w3schools.com/howto/howto_js_active_element.asp
//

const caixaDeCores = document.getElementById("color-palette");
const cores = caixaDeCores.getElementsByClassName("color");
const selecionado = document.getElementsByClassName("selected");

for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener("click", function () {
    selecionado[0].className = selecionado[0].className.replace("selected", "");
    this.className += " selected";
  });
}
const pixel = document.querySelector("#pixel-board");

// eslint-disable-next-line sonarjs/cognitive-complexity
pixel.addEventListener("click", (event) => {
  if (event.target.id !== "board") {
    const selected = document.querySelector(".selected");
    if (selected.classList.contains("black"))
      event.target.className = "pixel black";
    if (selected.classList.contains("red"))
      event.target.className = "pixel red";
    if (selected.classList.contains("blue"))
      event.target.className = "pixel blue";
    if (selected.classList.contains("green"))
      event.target.className = "pixel green";
    if (selected.classList.contains("yellow"))
      event.target.className = "pixel yellow";
  }
});

const quadrado = document.getElementsByClassName("pixel");
const button = document.getElementById("clear-board");

button.addEventListener("click", () => {
  for (let index = 0; index < quadrado.length; index += 1) {
    if (quadrado[index].className !== "pixel") {
      quadrado[index].className = "pixel";
    }
  }
});
