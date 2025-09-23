import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String,
  rol: String,
  createdAt: String,
});

const UserModel = mongoose.model("User", UserSchema);

class UserRepositoryMongo {

  async create(userData) {
    const user = new UserModel(userData);
    return await user.save();
  }

  async findAll() {
    return await UserModel.find();
  }

  async findById(id) {
   return await UserModel.findById(id);
  }

  async update(id, userData) {
   return await UserModel.findByIdAndUpdate(id, userData, { new: true });
  }

  async delete(id) {
   return await UserModel.findByIdAndDelete(id);
  }

  async findByUserEmail(email) {
    return await UserModel.findOne({email:email});
  }
  
}

export default UserRepositoryMongo;