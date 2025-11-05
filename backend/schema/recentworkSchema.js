import mongoose from "mongoose";

const recentworkSchema = new mongoose.Schema(
    {
        image: String,
        name: String,
        stack: String,
        features: Array,
        links: Array,
        tecnologies: Array,
        duration: String,
        rate: Number,
        description: String
    },
    { timestamps: true }
);

export default mongoose.model("RecentWork", recentworkSchema);