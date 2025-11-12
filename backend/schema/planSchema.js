import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        image: String,
        duration: String,
        features: Array
    },
    { timestamps: true }
);

export default mongoose.model("Plan", planSchema);