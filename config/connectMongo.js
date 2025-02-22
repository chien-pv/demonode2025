import mongoose from "mongoose";

export function connectMongo() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/demonodejs2025")
    .then(() => console.log("Connected!"));
}
