import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        price: Number,
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "plan",
        },
        clientID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Auth",
        },
        payStatus: String,
        clientText: String,
        clientFiles: String,
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema); 