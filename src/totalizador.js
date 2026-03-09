class Totalizador {

  constructor() {
    this.cantidad = 0;
    this.precioPorItem = 0.0;
    this.precioNeto= 0.0;
    this.descuentoPorCantidad = 0.0;
    this.estado="";
    this.ImpuestoPorEstado = 0;
    this.total=0.0;
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

  ingresarEstado(estado) {
    this.estado = estado;
  }

  obtenerPrecioPorItem() {
    return this.precioPorItem;
  }

  calcularPrecioNeto() {
    this.precioNeto = this.cantidad * this.precioPorItem;
  }

  obtenerPrecioNeto(){
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

  calcularImpuestoPorEstado(){
    if(this.estado === "UT"){
      this.ImpuestoPorEstado = 6.65;
    }
    else if(this.estado === "NV"){
      this.ImpuestoPorEstado = 8.0;
    }
    else if(this.estado === "TX"){
      this.ImpuestoPorEstado = 6.25;
    }
    else if(this.estado === "AL"){
      this.ImpuestoPorEstado = 4.0;
    }
    else if(this.estado === "CA"){
      this.ImpuestoPorEstado = 8.25;
    }
  }

  obtenerImpuestoPorEstado(){
    return this.ImpuestoPorEstado;
  }

  obtenerTotal(){
    this.calcularPrecioNeto();
    this.calcularImpuestoPorEstado();
    this.total = (this.precioNeto + (this.ImpuestoPorEstado * this.precioNeto / 100)).toFixed(2);
    return this.total;
  }
}

export default Totalizador;