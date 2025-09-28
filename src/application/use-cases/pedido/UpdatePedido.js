export default class UpdatePedido {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    async execute(id, updatedData) {
        // Llama directamente al método 'update' del repositorio.
        const updatedPedido = await this.pedidoRepository.update(id, updatedData);

        // Opcional: verifica si la compra fue encontrada y actualizada.
        if (!updatedPedido) {
            console.warn(`No se encontró ningun pedido con el id: ${id}`);
            return null; // Devuelve null si no se encontró
        }
        
        return updatedPedido;
    }
}