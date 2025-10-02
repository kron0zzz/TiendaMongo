import { ProductModel } from "../db/ProductModel.js";

class ProductRepositoryMongo {

  async create(productData) {
    const product = new ProductModel(productData);
    return await product.save();
  }

  async findAll() {
    return await ProductModel.find();
  }

  async findById(id) {
   return await ProductModel.findById(id);
  }

  async update(id, productData) {
   return await ProductModel.findByIdAndUpdate(id, productData, { new: true });
  }

  async delete(id) {
   return await ProductModel.findByIdAndDelete(id);
  }



  async updateStock(id, cantidad) {
    // cantidad puede ser negativa o positiva
    return await ProductModel.findByIdAndUpdate(
      id,
      { $inc: { stock: cantidad } }, // $inc suma o resta
      { new: true }
    );
  }



  
}

export default ProductRepositoryMongo;