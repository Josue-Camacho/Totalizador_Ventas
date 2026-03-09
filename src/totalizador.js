class Totalizador {

  constructor() {
    this.cantidad = 0;
    this.precioPorItem = 0;
    this.precioNeto= 0;
    this.descuentoPorCantidad = 0;
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
    this.precioNeto = this.cantidad * this.precioPorItem;
    return this.precioNeto;
  }

  obtenerDescuentoPorCantidad() {
    if (this.precioNeto >= 10000) {
      this.descuentoPorCantidad = 15;
    }
    else if (this.precioNeto >= 30000) {
      this.descuentoPorCantidad = 10;
    }
    else if (this.precioNeto >= 7000) {
      this.descuentoPorCantidad = 7;
    } 
    else if (this.precioNeto >= 3000) {
      this.descuentoPorCantidad = 5;
    }
    else if (this.precioNeto >= 1000) {
      this.descuentoPorCantidad = 3;
    }
    return this.descuentoPorCantidad;
  }
}

export default Totalizador;