import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, require: true },
  price: { type: Number, require: true },
  amount: { type: Number, require: true }
}, 
{ 
  versionKey: false 
});

const productModel = mongoose.model("products", productSchema);

export default productModel;