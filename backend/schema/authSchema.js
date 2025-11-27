import mongoose from 'mongoose'

const AuthSchema = new mongoose.Schema(
    {
        name:String,
        email: String,
        phone: String,
        password: String,
        img: String,
    },
    {
        timestamps: true
    }
)



export default mongoose.model('Auth', AuthSchema)