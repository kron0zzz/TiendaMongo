import express from "express";
import userRoutes from "../infrastructure/routes/userRoutes.js";
import loginRoutes from "../infrastructure/routes/loginRoutes.js"
import productRoutes from "../infrastructure/routes/productRoutes.js"
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/products", productRoutes)
export default app;