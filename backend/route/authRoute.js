import express from 'express'
import Auth from '../schema/authSchema.js'
import upload from '../multer/multer.js'
import cloudinary from '../cloudnary/cloudnary.js'
import bcrypt from 'bcrypt'
import { protectedRoute } from '../middelware/protectRoute.js'
const keys = process.env.SECRET_KEY
import jwt from 'jsonwebtoken'
const router = express.Router()


router.get('/', protectedRoute, async (req, res)=>{
    const id = req.id
    try {
        const result = await Auth.findOne({_id: id})
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})


router.get('/:id', async (req, res)=>{
    try {
        const result = await Auth.findById(req.params.id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async (req, res)=>{
    const image = 'https://res.cloudinary.com/dythjh03y/image/upload/v1764153808/avater_ibtvdp.webp'
    const {email, phone, name, password} = req.body
    const saltRounds = 10
    try{
        const hashed = await bcrypt.hash(password, saltRounds);
        const IsExist = await Auth.findOne({email})
        if(IsExist){
            res.status(400).json({message:"User already exist"})
        }else{
            const user = await Auth.create({
                name,
                email,
                phone,
                password : hashed,
                img : image
            })
            const token = jwt.sign({id:user._id}, keys)
            res.cookie('token', token, {httpOnly:true, secure:true, sameSite:'none'})
            res.send("sign in successfully")
        }
    }catch(err){
        console.log(err)
    }
})

router.post('/login', async (req, res)=>{
    const {email, password} = req.body
    console.log(email)
    try {
        const user = await Auth.findOne({email})
        
        if(!user){
            return res.status(400).json({message: "User not found", access: false} )
        }
        const isMatch = await bcrypt.compare(password, user.password)
        
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials", access: false} )
        }
        const token = jwt.sign({id:user._id}, keys)
        res.cookie('token', token, {httpOnly:true, secure:true, sameSite:'none'})
        res.status(200).json({message: "Login success", access: true})
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', upload.single('image'), async (req, res)=>{
    try {
        const {path} = req.file
        const result = await cloudinary.uploader.upload(path, {folder: 'profilePics'})
        const updatedUser = await Auth.findByIdAndUpdate(req.params.id, {img: result.secure_url}, {new: true})
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error)
    }
})


router.delete('/', protectedRoute, async (req, res)=>{
    try {
        res.clearCookie('token', {httpOnly:true, secure:true, sameSite:'none'})
        res.status(200).json("logout successfully")
    } catch (error) {
        console.log(error)
    }
})




export default router