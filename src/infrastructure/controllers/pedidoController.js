import CreatePedido from "../../application/use-cases/pedido/CreatePedido.js";
import GetPedidos from "../../application/use-cases/pedido/GetPedidos.js";
import GetPedidoById from "../../application/use-cases/pedido/GetPedidoById.js";
import UpdatePedido from "../../application/use-cases/pedido/UpdatePedido.js";
import DeletePedido from "../../application/use-cases/pedido/DeletePedido.js";
import CancelPedido from "../../application/use-cases/pedido/CancelPedido.js"

import PedidoRepositoryMongo from "../repositories/PedidoRepositoryMongo.js";
import ProductRepositoryMongo from "../repositories/ProductRepositoryMongo.js";

const pedidoRepository = new PedidoRepositoryMongo();
const productRepository = new ProductRepositoryMongo();



export const createPedido = async (req, res) => {
  try {
    const createPedido = new CreatePedido(pedidoRepository, productRepository);
    const pedido = await createPedido.execute(req.body);
    res.status(201).json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getPedidos = async (req, res) => {
  try {
    const getPedidos = new GetPedidos(pedidoRepository);
    const pedidos = await getPedidos.execute();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const getPedidoById = async (req, res) => {
  try {
    const getPedidoById = new GetPedidoById(pedidoRepository);
    const pedido = await getPedidoById.execute(req.params.id);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const updatePedido = async (req, res) => {
  try {
    const updatePedido = new UpdatePedido(pedidoRepository);
    const pedido = await updatePedido.execute(req.params.id, req.body);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePedido = async (req, res) => {
  try {
    const deletePedido = new DeletePedido(pedidoRepository);
    const result = await deletePedido.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json({ message: "Pedido eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 



export const cancelPedido = async (req, res) => {
  try {
    const cancelPedido = new CancelPedido(pedidoRepository, productRepository);
    const pedidoCancelado = await cancelPedido.execute(req.params.id);

    res.status(200).json({
      mensaje: "Pedido cancelado con éxito",
      pedido: pedidoCancelado
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};