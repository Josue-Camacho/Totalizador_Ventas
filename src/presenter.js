import Totalizador from "./totalizador.js";

const totalizador = new Totalizador();

const inputCantidad = document.querySelector("#cantidad");
const divCantidad = document.querySelector("#cantidad-mostrada");

inputCantidad.addEventListener("input", () => {
  const cantidad = Number.parseInt(inputCantidad.value || "0", 10);
  totalizador.ingresarCantidad(cantidad);
  divCantidad.innerText = `Cantidad de ítem: ${totalizador.obtenerCantidad()}`;
});