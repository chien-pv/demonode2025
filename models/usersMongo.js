import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  status: Boolean,
});

const UserMongo = mongoose.model("user", UserSchema);

export default UserMongo;
