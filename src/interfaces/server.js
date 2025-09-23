import express from "express";
import userRoutes from "../infrastructure/routes/userRoutes.js";
import loginRoutes from "../infrastructure/routes/loginRoutes.js"
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/login", loginRoutes)
export default app;