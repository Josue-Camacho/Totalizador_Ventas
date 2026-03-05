class Totalizador {
  constructor() {
    this.cantidad = 0;
  }

  ingresarCantidad(cantidad) {
    this.cantidad = cantidad;
  }

  obtenerCantidad() {
    return this.cantidad;
  }
}

export default Totalizador;