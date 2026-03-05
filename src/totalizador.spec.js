import Totalizador from "./totalizador.js";

describe("Totalizador - cantidad", () => {
  it("deberia guardar la cantidad ingresada", () => {
    const totalizador = new Totalizador();
    totalizador.ingresarCantidad(20);
    expect(totalizador.obtenerCantidad()).toEqual(20);
  });
});