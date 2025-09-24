class Pedido {
    constructor({ id, usuarioId, total, estado, createdAt }) {
      this.id = id;
      this.usuarioId = usuarioId;
      this.total = total;
      this.estado = estado;
      this.createdAt = createdAt;
    }
  }
  export default Pedido;
  