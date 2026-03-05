class Totalizador {

  constructor() {
    this.cantidad = 0;
    this.precioPorItem = 0;
  }

  ingresarCantidad(cantidad) {
    this.cantidad = cantidad;
  }

  obtenerCantidad() {
    return this.cantidad;
  }

  ingresarPrecioPorItem(precio) {
    this.precioPorItem = precio;
  }

  obtenerPrecioPorItem() {
    return this.precioPorItem;
  }

  calcularPrecioNeto() {
    return this.cantidad * this.precioPorItem;
  }
}

export default Totalizador;