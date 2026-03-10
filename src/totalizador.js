class Totalizador {

  constructor() {
    this.cantidad = 0;
    this.precioPorItem = 0.0;
    this.precioNeto= 0.0;
    this.descuentoPorCantidad = 0.0;
    this.estado="CA";
    this.ImpuestoPorEstado = 0;
    this.total=0.0;
    this.ImpuestoTotal=0.0;
    this.descuentoTotal=0.0;
    this.categoria="Varios";
  }

  ingresarCategoria(categoria)  {
    this.categoria = categoria;
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

  calcularDescuentoPorCantidad() {
    if (this.total >= 30000.00) {
      this.descuentoPorCantidad = 15.00;
    }
    else if (this.total >= 10000.00) {
      this.descuentoPorCantidad = 10.00;
    }
    else if (this.total >= 7000.00) {
      this.descuentoPorCantidad = 7.00;
    } 
    else if (this.total >= 3000.00) {
      this.descuentoPorCantidad = 5.00;
    }
    else if (this.total >= 1000.00) {
      this.descuentoPorCantidad = 3.00;
    }
  }

  obtenerDescuentoPorCantidad(){
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

  calcularImpuestoExtra(){
    if(this.categoria =="Alimentos"||this.categoria =="MaterialDeEscritorio"||this.categoria =="Varios"){
      return 0.00;
    }
    else if(this.categoria =="BebidasAlcoholicas"){
      return 7.00;
    }
    else if(this.categoria =="Muebles"){
      return 3.00;
    }
    else if(this.categoria =="Electronicos"){
      return 4.00;
    }
    else if(this.categoria =="Vestimenta"){
      return 2.00;
    }
  }

    calcularDescuentoExtra(){
    if(this.categoria =="BebidasAlcoholicas"||this.categoria =="Muebles"||this.categoria =="Varios"||this.categoria=="Vestimenta"){
      return 0.00;
    }
    else if(this.categoria =="Electronicos"){
      return 1.00;
    }
    else if(this.categoria =="MaterialDeEscritorio"){
      return 1.50;
    }
    else if(this.categoria =="Alimentos"){
      return 2.00;
    }
  }

  calcularImpuestoTotal(){
    this.calcularImpuestoPorEstado();
    this.ImpuestoTotal = this.ImpuestoPorEstado+this.calcularImpuestoExtra();
  }

  calcularDescuentoTotal(){
    this.calcularDescuentoPorCantidad();
    this.descuentoTotal = this.descuentoPorCantidad+this.calcularDescuentoExtra();
  }

  obtenerTotal(){
    this.calcularPrecioNeto();
    this.calcularImpuestoTotal();
    this.total=this.precioNeto;
    if(this.ImpuestoTotal!=0){ this.total = (this.precioNeto + (this.ImpuestoTotal * this.precioNeto / 100));}
    this.calcularDescuentoTotal();
    if(this.descuentoTotal!=0){this.total=(this.total*(1-(this.descuentoTotal/100)));}
    return this.total.toFixed(2)  ;
  }
}

export default Totalizador;