import { Router } from "express";

import {
  createPedido,
  getPedidos,
  getPedidoById,
  updatePedido,
  deletePedido,
  cancelPedido
} from "../controllers/pedidoController.js";

const router = Router();
router.post("/", createPedido);
router.get("/",  getPedidos);      
router.get("/:id", getPedidoById);
router.put("/:id", updatePedido);
router.delete("/:id", deletePedido);
router.put("/:id/cancel", cancelPedido);


export default router