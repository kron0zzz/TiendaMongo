import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required:true, minlenght:4, maxlength:20},
  email: {type:String, required:true, minlenght:7, maxlength:50,unique:true, match:/.+\@.+\..+/ },
  password:{type:String, required:true, maxlength:60},
  rol: String,
  createdAt: String,
});

export const UserModel = mongoose.model("User", UserSchema);