import Totalizador from "./totalizador.js";

describe("Totalizador - cantidad", () => {
  it("deberia guardar la cantidad ingresada", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(20);
    expect(totalizador.obtenerCantidad()).toEqual(20);
  });

  it("deberia guardar el precio por item ingresado", () => {
  const totalizador = new Totalizador();
  totalizador.ingresarPrecioPorItem(3);
  expect(totalizador.obtenerPrecioPorItem()).toEqual(3);
});
});