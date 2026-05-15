import { model, Schema } from "mongoose";

const productScchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    stock: { type: Number, required: true },
    price: { type: Number, unique: true, required: true },

})


const productModel = model("Product", productScchema)

export { productModel, productScchema } 