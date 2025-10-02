export default class CancelPedido {
  constructor(pedidoRepository, productRepository) {
    this.pedidoRepository = pedidoRepository;
    this.productRepository = productRepository;
  }

  async execute(id) {
    // 1. Buscar el pedido
    const pedido = await this.pedidoRepository.findById(id);
    if (!pedido) {
      throw new Error("Pedido no encontrado");
    }

    // 2. Verificar si ya está cancelado
    if (pedido.estado === false) {
      throw new Error("Este pedido ya fue cancelado");
    }

    // 3. Devolver stock a cada producto del pedido
    for (const detalle of pedido.pedidoDetalle) {
      await this.productRepository.updateStock(detalle.productId, detalle.cantidad);
    }

    // 4. Cambiar estado a false
    pedido.estado = false;

    // 5. Guardar cambios
    const pedidoCancelado = await this.pedidoRepository.update(id, pedido);
    return pedidoCancelado;
  }
}
