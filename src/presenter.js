import Totalizador from "./totalizador.js";

const totalizador = new Totalizador();

const inputCantidad = document.querySelector("#cantidad");
const inputPrecio = document.querySelector("#precio");
const previewDiv = document.querySelector("#preview-div");

function renderPreview() {
  previewDiv.innerText =
    `Cantidad de ítem: ${totalizador.obtenerCantidad()}\n` +
    `Precio por ítem: ${totalizador.obtenerPrecioPorItem()}`;
}

inputCantidad.addEventListener("input", () => {
  const cantidad = Number.parseInt(inputCantidad.value || "0", 10);
  totalizador.ingresarCantidad(cantidad);
  renderPreview();
});

inputPrecio.addEventListener("input", () => {
  const precio = Number.parseFloat(inputPrecio.value || "0");
  totalizador.ingresarPrecioPorItem(precio);
  renderPreview();
});

// render inicial
renderPreview();