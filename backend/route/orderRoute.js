import express from 'express'
import Order from '../schema/orderSchema.js'
import upload from '../multer/multer.js'
import cloudinary from '../cloudnary/cloudnary.js'
import { protectedRoute } from '../middelware/protectRoute.js'

const router = express.Router()



router.get('/:id', async (req, res)=>{
    try {
        const result = await Order.find({clientID: req.params.id})
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})
router.get('/', protectedRoute, async (req, res)=>{
    const id = req.id
    try {
        const result = await Order.find({clientID: id})
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})





router.post('/', upload.single('clientFiles'), async (req, res)=>{
    console.log(req.file)
    const {name, email, phone, price, productID, clientID, payStatus, clientText} = req.body
    try {
        const imgsend = await cloudinary.uploader.upload(req.file.path, {
                    folder: 'orders',
                })
        const result = await Order.create({
            name, email, phone, price, productID, clientID, payStatus, clientText, clientFiles: imgsend.secure_url
        })
        res.send({msg :"Order successfully done"})
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async(req, res)=>{
    const {payStatus} = req.body
    try {
        const result = await Order.findByIdAndUpdate({_id: req.params.id}, {payStatus})
        res.send({msg: "successfully updated", result})
    } catch (error) {
        console.log(error)
    }
})



router.delete('/:id', async(req, res)=>{
    try {
        const result = await Order.findByIdAndDelete({_id: req.params.id})
        res.send({msg: "successfully deleted"})
    } catch (error) {
        console.log(error)
    }
})


export default router