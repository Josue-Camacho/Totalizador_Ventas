import Totalizador from "./totalizador.js";

const form = document.querySelector("#totalizador-form");
const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoInput = document.querySelector("#estado");
const categoriaInput = document.querySelector("#categoria");
const resultadoDiv = document.querySelector("#resultado-div");
const descuentoDiv = document.querySelector("#descuento-div");
const impuestoDiv = document.querySelector("#impuesto-div");
const totalDiv = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado= estadoInput.value

  const totalizador = new Totalizador();

  totalizador.ingresarCantidad(cantidad);
  totalizador.ingresarPrecioPorItem(precio);
  totalizador.ingresarEstado(estado);
  const total = totalizador.obtenerTotal();
  const precioNeto = totalizador.obtenerPrecioNeto();
  const descuentoPorCantidad = totalizador.obtenerDescuentoTotal();
  const impuesto = totalizador.obtenerImpuestoTotal();

  resultadoDiv.innerHTML = `<p>Precio neto (${cantidad} * ${precio}): ${precioNeto}</p>`;
  impuestoDiv.innerHTML = `<p>Impuesto para ${estado} mas extra (${impuesto}%): ${impuesto*precioNeto/100}</p>`;
  descuentoDiv.innerHTML = `<p>Descuento (${descuentoPorCantidad}% mas extra): ${descuentoPorCantidad*precioNeto/100}</p>`;
  totalDiv.innerHTML = `<p>Precio Total(descuento e impuesto): ${total}</p>`;
});