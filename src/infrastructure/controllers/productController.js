import CreateProduct from "../../application/use-cases/product/CreateProduct.js";
import GetProducts from "../../application/use-cases/product/GetProducts.js";
import GetProductById from "../../application/use-cases/product/GetProductById.js";
import UpdateProduct from "../../application/use-cases/product/UpdateProduct.js";
import DeleteProduct from "../../application/use-cases/product/DeleteProduct.js";

import ProductRepositoryMongo from "../repositories/ProductRepositoryMongo.js";

const productRepository = new ProductRepositoryMongo();
export const createProduct = async (req, res) => {
  try {
    const createProduct = new CreateProduct(productRepository);
    const product = await createProduct.execute(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getProducts = async (req, res) => {
  try {
    const getProducts = new GetProducts(productRepository);
    const products = await getProducts.execute();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const getProductById = async (req, res) => {
  try {
    const getProductById = new GetProductById(productRepository);
    const product = await getProductById.execute(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const updateProduct = async (req, res) => {
  try {
    const updateProduct = new UpdateProduct(productRepository);
    const product = await updateProduct.execute(req.params.id, req.body);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = new DeleteProduct(productRepository);
    const result = await deleteProduct.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Producto no encontrado" });
    res.json({ message: "Producto eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 