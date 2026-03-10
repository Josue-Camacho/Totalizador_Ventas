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
    totalizador.ingresarCategoria("Varios");
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
  it("deberia calcular el precio total con el descuento sobre 7000", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(700);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("");
    expect(totalizador.obtenerTotal()).toEqual("6510.00");
  });
  it("deberia calcular el precio total con el descuento sobre 10000", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(1000);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("");
    expect(totalizador.obtenerTotal()).toEqual("9000.00");
  });
  it("deberia calcular el precio total con el descuento sobre 30000", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(300);
    totalizador.ingresarPrecioPorItem(100);
    totalizador.ingresarEstado("");
    expect(totalizador.obtenerTotal()).toEqual("25500.00");
  });
  it("deberia calcular el precio total con el descuento y el impuesto", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(1000);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("TX");
    expect(totalizador.obtenerTotal()).toEqual("9562.50");
  });
  it("deberia calcular el precio mas el costo de envio", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(1000);
    totalizador.ingresarPrecioPorItem(10);
    totalizador.ingresarEstado("TX");
    totalizador.ingresarPesoVolumetricoPorUnidad(21);
    expect(totalizador.obtenerTotal()).toEqual("14562.50");
  });

  it("deberia aplicar descuento al costo de envio para cliente recurrente", () => {
  const totalizador = new Totalizador();
  totalizador.ingresarCantidad(1000);
  totalizador.ingresarPrecioPorItem(10);
  totalizador.ingresarEstado("TX");
  totalizador.ingresarPesoVolumetricoPorUnidad(21);
  totalizador.ingresarTipoCliente("Recurrente");
  expect(totalizador.obtenerTotal()).toEqual("14537.50");
  });

  it("deberia aplicar descuento fijo de 100 para cliente recurrente en alimentos con precio neto mayor a 3000", () => {
  const totalizador = new Totalizador();

  totalizador.ingresarCantidad(2000);
  totalizador.ingresarPrecioPorItem(2); 
  totalizador.ingresarEstado("NV");
  totalizador.ingresarCategoria("Alimentos");
  totalizador.ingresarTipoCliente("Recurrente");

  expect(totalizador.obtenerTotal()).toEqual("3917.60");
  });

});