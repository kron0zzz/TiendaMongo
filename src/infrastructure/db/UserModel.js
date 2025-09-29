import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength:4, maxlength: 20},
  email: {type: String, required: true, unique:true, minlength:8, maxlength: 50, match:/.+\@.+\..+/ },
  password: {type: String, required: true, minlength:4, maxlength: 60 },
  rol: {type: String, required: true, minlength:4, maxlength:15},
  createdAt: {type: Date, required:true, minlength:10, default: Date.now}
});

export const UserModel = mongoose.model("User", UserSchema);
