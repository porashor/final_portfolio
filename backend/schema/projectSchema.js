import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: String,
        image: String,
        description: String,
        siteType: String,
        role: String,
        features: String,
        technologies: String,
        link: String,
        buyer: String,
        gotPrice: Number,
    },
    { timestamps: true }
);

export default mongoose.model("Project", projectSchema);