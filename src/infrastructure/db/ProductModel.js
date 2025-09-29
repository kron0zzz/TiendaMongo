import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength:4, maxlength: 20 , unique:true},
  descripcion: {type: String, required: true, minlength:8, maxlength: 50},
  precio: {type: Number, required: true, min:100, max: 9000000  },
  stock: {type: Number, required: true, min:1, max:999},
  categoria: {type: String, required: true, minlenght: 4, maxlength: 20},
  createdAt: {type: Date, required:true, minlength:10, default: Date.now}
});

export const ProductModel = mongoose.model("Product", ProductSchema);