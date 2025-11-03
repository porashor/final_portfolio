import mongoose from "mongoose";


const consultantSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        duration: String,
        subject: String,
        timeStand: String,
        cost: Number
    },
    { timestamps: true }
);

export default mongoose.model("Consultant", consultantSchema);
