class Totalizador {

  constructor() {
    this.cantidad = 0;
    this.precioPorItem = 0.0;
    this.precioNeto = 0.0;
    this.descuentoPorCantidad = 0.0;
    this.estado = "CA";
    this.ImpuestoPorEstado = 0;
    this.total = 0.0;
    this.ImpuestoTotal = 0.0;
    this.descuentoTotal = 0.0;
    this.categoria = "Varios";
    this.envio = 0.0;
    this.tipoCliente = "Normal";
  }
  ingresarTipoCliente(tipo){
    this.tipoCliente = tipo;
  }

  ingresarCategoria(categoria) {
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

  obtenerPrecioNeto() {
    return this.precioNeto;
  }

  obtenerEnvio(){
    return this.envio;
  }
  calcularDescuentoPorCantidad() {
    if (this.total >= 30000) {
      this.descuentoPorCantidad = 15;
    } else if (this.total >= 10000) {
      this.descuentoPorCantidad = 10;
    } else if (this.total >= 7000) {
      this.descuentoPorCantidad = 7;
    } else if (this.total >= 3000) {
      this.descuentoPorCantidad = 5;
    } else if (this.total >= 1000) {
      this.descuentoPorCantidad = 3;
    } else {
      this.descuentoPorCantidad = 0;
    }
  }

  obtenerDescuentoPorCantidad() {
    return this.descuentoPorCantidad;
  }

  calcularImpuestoPorEstado() {
    if (this.estado === "UT") {
      this.ImpuestoPorEstado = 6.65;
    } else if (this.estado === "NV") {
      this.ImpuestoPorEstado = 8.0;
    } else if (this.estado === "TX") {
      this.ImpuestoPorEstado = 6.25;
    } else if (this.estado === "AL") {
      this.ImpuestoPorEstado = 4.0;
    } else if (this.estado === "CA") {
      this.ImpuestoPorEstado = 8.25;
    } else {
      this.ImpuestoPorEstado = 0;
    }
  }

  obtenerImpuestoPorEstado() {
    return this.ImpuestoPorEstado;
  }

  calcularImpuestoExtra() {
    if (
      this.categoria === "Alimentos" ||
      this.categoria === "MaterialDeEscritorio" ||
      this.categoria === "Varios"
    ) {
      return 0;
    } else if (this.categoria === "BebidasAlcoholicas") {
      return 7;
    } else if (this.categoria === "Muebles") {
      return 3;
    } else if (this.categoria === "Electronicos") {
      return 4;
    } else if (this.categoria === "Vestimenta") {
      return 2;
    }
  }

  calcularDescuentoExtra() {
    if (
      this.categoria === "BebidasAlcoholicas" ||
      this.categoria === "Muebles" ||
      this.categoria === "Varios" ||
      this.categoria === "Vestimenta"
    ) {
      return 0;
    } else if (this.categoria === "Electronicos") {
      return 1;
    } else if (this.categoria === "MaterialDeEscritorio") {
      return 1.5;
    } else if (this.categoria === "Alimentos") {
      return 2;
    }
  }

  calcularImpuestoTotal() {
    this.calcularImpuestoPorEstado();
    this.ImpuestoTotal =
      this.ImpuestoPorEstado + this.calcularImpuestoExtra();
  }

  calcularDescuentoTotal() {
    this.calcularDescuentoPorCantidad();
    this.descuentoTotal =
      this.descuentoPorCantidad + this.calcularDescuentoExtra();
  }

  obtenerImpuestoTotal() {
    return this.ImpuestoTotal;
  }

  obtenerDescuentoTotal() {
    return this.descuentoTotal;
  }

  ingresarPesoVolumetricoPorUnidad(peso) {
    if (peso > 200) {
      this.envio = 9 * this.cantidad;
    } else if (peso > 100) {
      this.envio = 8 * this.cantidad;
    } else if (peso > 80) {
      this.envio = 6.5 * this.cantidad;
    } else if (peso > 40) {
      this.envio = 6 * this.cantidad;
    } else if (peso > 20) {
      this.envio = 5 * this.cantidad;
    } else if (peso > 10) {
      this.envio = 3.5 * this.cantidad;
    } else {
      this.envio = 0;
    }
  }

  calcularEnvio() {}

  obtenerTotal() {
    this.calcularPrecioNeto();
    this.calcularImpuestoTotal();

    this.total = this.precioNeto;

    if (this.ImpuestoTotal !== 0) {
      this.total = this.precioNeto + (this.ImpuestoTotal * this.precioNeto) / 100;
    }

    this.calcularDescuentoTotal();

    if (this.descuentoTotal !== 0) {
      this.total = this.total * (1 - this.descuentoTotal / 100);
    }
    const descuentoFijo = this.calcularDescuentoFijo();
    this.total -= descuentoFijo;
    this.calcularEnvio();

    const descuentoEnvio = this.calcularDescuentoEnvio();
    const envioFinal = this.envio * (1 - descuentoEnvio / 100);

    this.total += envioFinal;

    return this.total.toFixed(2);
  }

  calcularDescuentoEnvio(){
  if(this.tipoCliente === "Recurrente"){
    return 0.5;
  }
  else if(this.tipoCliente === "Antiguo Recurrente"){
    return 1;
  }
  else if(this.tipoCliente === "Especial"){
    return 1.5;
  }
  return 0;
  }


  calcularDescuentoFijo(){
  if(
    this.tipoCliente === "Recurrente" &&
    this.precioNeto > 3000 &&
    this.categoria === "Alimentos"
  ){
    return 100;
  }

  if(
    this.tipoCliente === "Especial" &&
    this.precioNeto > 7000 &&
    this.categoria === "Electronicos"
  ){
    return 200;
  }

  return 0;
  }

}

export default Totalizador;