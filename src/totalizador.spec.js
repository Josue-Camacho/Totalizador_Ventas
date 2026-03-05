import Totalizador from "./totalizador.js";

describe("Totalizador - precio neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(20);
    totalizador.ingresarPrecioPorItem(3);

    expect(totalizador.calcularPrecioNeto()).toEqual(60);
  });
});