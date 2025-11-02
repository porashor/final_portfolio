import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: String,
        image: String,
        description: String,
        autor: String,
    },
    { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);