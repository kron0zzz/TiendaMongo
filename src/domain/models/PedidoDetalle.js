class PedidoDetalle {
    constructor({ id, pedidoId, productoId, cantidad, precioUnitario, subtotal }) {
      this.id = id;
      this.pedidoId = pedidoId;
      this.productoId = productoId;
      this.cantidad = cantidad;
      this.precioUnitario = precioUnitario;
      this.subtotal = subtotal;
    }
  }
  export default PedidoDetalle;
  