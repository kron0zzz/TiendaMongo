export default class UpdateProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id, updatedData) {
        // Llama directamente al método 'update' del repositorio.
        const updatedProduct = await this.productRepository.update(id, updatedData);

        // Opcional: verifica si la compra fue encontrada y actualizada.
        if (!updatedProduct) {
            console.warn(`No se encontró ningun producto con el id: ${id}`);
            return null; // Devuelve null si no se encontró
        }
        
        return updatedProduct;
    }
}