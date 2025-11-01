import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
    {
        name: String,
        position: String,
        image: String,
        description: String,
        rating: Number,
    },
    { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);