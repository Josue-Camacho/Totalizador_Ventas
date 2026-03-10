import Totalizador from "./totalizador.js";

const form = document.querySelector("#totalizador-form");

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoInput = document.querySelector("#estado");
const categoriaInput = document.querySelector("#categoria");
const pesoInput = document.querySelector("#peso");
const tipoClienteInput = document.querySelector("#tipoCliente");

const resultadoDiv = document.querySelector("#resultado-div");
const impuestoDiv = document.querySelector("#impuesto-div");
const descuentoDiv = document.querySelector("#descuento-div");
const envioDiv = document.querySelector("#envio-div");
const totalDiv = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoInput.value;
  const categoria = categoriaInput.value;
  const peso = Number.parseFloat(pesoInput.value);
  const tipoCliente = tipoClienteInput.value;

  const totalizador = new Totalizador();

  totalizador.ingresarCantidad(cantidad);
  totalizador.ingresarPrecioPorItem(precio);
  totalizador.ingresarEstado(estado);
  totalizador.ingresarCategoria(categoria);
  totalizador.ingresarPesoVolumetricoPorUnidad(peso);
  totalizador.ingresarTipoCliente(tipoCliente);

  const total = totalizador.obtenerTotal();
  const precioNeto = totalizador.obtenerPrecioNeto();
  const descuento = totalizador.obtenerDescuentoTotal();
  const impuesto = totalizador.obtenerImpuestoTotal();
  const envio = totalizador.obtenerEnvio();

  const impuestoCalculado = (impuesto * precioNeto) / 100;
  const descuentoCalculado = (descuento * precioNeto) / 100;

  resultadoDiv.innerHTML =
    `<p>Precio neto (${cantidad} * ${precio}): ${precioNeto.toFixed(2)}</p>`;

  impuestoDiv.innerHTML =
    `<p>Impuesto aplicado (${impuesto}%): ${impuestoCalculado.toFixed(2)}</p>`;

  descuentoDiv.innerHTML =
    `<p>Descuento aplicado (${descuento}%): ${descuentoCalculado.toFixed(2)}</p>`;

  envioDiv.innerHTML =
    `<p>Costo de envío: ${envio.toFixed(2)}</p>`;

  totalDiv.innerHTML =
    `<p><strong>Total a pagar: ${total}</strong></p>`;
});