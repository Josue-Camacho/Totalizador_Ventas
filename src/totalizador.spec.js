import Totalizador from "./totalizador.js";

describe("Totalizador - precio neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(20);
    totalizador.ingresarPrecioPorItem(3);
    totalizador.ingresarEstado("CA");
    totalizador.obtenerTotal();
    expect(totalizador.obtenerPrecioNeto()).toEqual(60);
  });
  it("deberia calcular el precio total con el impuesto CA", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(10);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("CA");
    expect(totalizador.obtenerTotal()).toEqual("108.25");
  });
});