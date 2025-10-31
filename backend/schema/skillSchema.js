import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
    {
        name: String,
        image: String,
        pogress: Number,
        description: String,
        state: String,
    },
    { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);