import express from 'express'
const router = express.Router()
import Testimonial from '../schema/testimonialSchema.js'
import upload from '../multer/multer.js'
import cloudinary from '../cloudnary/cloudnary.js'


router.get('/', async (req, res) => {
    try {
        const testimonial = await Testimonial.find()
        res.status(200).json(testimonial)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.post('/', upload.single("image"), async (req, res) => {
    const { name, position, rating, description } = req.body
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'testimonial',
        })
        const testimonial = await Testimonial.create({
            name,
            image : result.secure_url,
            position,
            rating,
            description
        })
        res.status(200).json(testimonial)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id)
        res.status(200).json(testimonial)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default router