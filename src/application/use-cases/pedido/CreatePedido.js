//import { PedidoModel } from "../../../infrastructure/repositories/PedidoRepositoryMongo.js";
//import { ProductModel } from "../../../infrastucture/repositories/ProductRepositoryMongo.js";  


class CreatePedido {
  constructor(pedidoRepository, productRepository) {
    this.pedidoRepository = pedidoRepository;
    this.productRepository = productRepository;
  }

  async execute(pedidoData) {
    // 1. Validar que todos los productos existan y tengan stock suficiente
    for (const item of pedidoData.pedidoDetalle) {
      const product = await this.productRepository.findById(item.productId);

      if (!product) throw new Error(`Producto ${item.productId} no encontrado`);
      if (product.stock < item.cantidad) {
        throw new Error(`Stock insuficiente para ${product.name}`);
      }
    }

    // 2. Crear el pedido
    const pedido = await this.pedidoRepository.create(pedidoData);

    // 3. Descontar stock en cada producto
    for (const item of pedidoData.pedidoDetalle) {
      await this.productRepository.updateStock(item.productId, -item.cantidad);
    }

    return pedido;
  }
}

export default CreatePedido;
