import express from 'express'
const router = express.Router()
import Plan from '../schema/planSchema.js'
import upload from '../multer/multer.js'
import cloudinary from '../cloudnary/cloudnary.js'


router.get('/', async (req, res) => {
    try {
        const plans = await Plan.find()
        res.status(200).json(plans)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id)
        res.status(200).json(plan)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})




router.post('/', upload.single('image'), async (req, res) => {
    const { name, description, price, duration, features } = req.body
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'plan',
        })
        const plan = await Plan.create({
            name,
            image : result.secure_url,
            description,
            price,
            duration,
            features
        })
        res.status(200).json(plan)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})








router.delete('/:id', async (req, res) => {
    try {
        const plan = await Plan.findByIdAndDelete(req.params.id)
        res.status(200).json(plan)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default router