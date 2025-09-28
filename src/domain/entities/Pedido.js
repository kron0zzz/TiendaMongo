class Pedido {
    constructor({ id, usuarioId, total, estado, pedidoDetalle, createdAt }) {
      this.id = id;
      this.usuarioId = usuarioId;
      this.total = total;
      this.estado = estado;
      this.pedidoDetalle = pedidoDetalle;
      this.createdAt = createdAt;
    }
  }
  export default Pedido;
  