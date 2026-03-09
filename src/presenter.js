import Totalizador from "./totalizador.js";

const form = document.querySelector("#totalizador-form");
const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const resultadoDiv = document.querySelector("#resultado-div");
const descuentoDiv = document.querySelector("#descuento-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);

  const totalizador = new Totalizador();

  totalizador.ingresarCantidad(cantidad);
  totalizador.ingresarPrecioPorItem(precio);

  const precioNeto = totalizador.calcularPrecioNeto();
  const descuentoPorCantidad = totalizador.obtenerDescuentoPorCantidad();

  resultadoDiv.innerHTML = `<p>Precio neto (${cantidad} * ${precio}): ${precioNeto}</p>`;
  descuentoDiv.innerHTML = `<p>Descuento (${descuentoPorCantidad}%): ${descuentoPorCantidad}</p>`;
});