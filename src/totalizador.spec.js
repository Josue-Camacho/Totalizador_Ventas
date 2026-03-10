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
  it("deberia calcular el precio total con el impuesto AL", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(10);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("AL");
    expect(totalizador.obtenerTotal()).toEqual("104.00");
  });
  it("deberia calcular el precio total con el impuesto NV", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(10);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("NV");
    expect(totalizador.obtenerTotal()).toEqual("108.00");
  });
  it("deberia calcular el precio total con el impuesto UT", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(10);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("UT");
    expect(totalizador.obtenerTotal()).toEqual("106.65");
  });
  it("deberia calcular el precio total con el descuento sobre 1000", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(100);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("");
    expect(totalizador.obtenerTotal()).toEqual("970.00");
  });
  it("deberia calcular el precio total con el descuento sobre 3000", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(300);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("");
    expect(totalizador.obtenerTotal()).toEqual("2850.00");
  });
});