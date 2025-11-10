import express from 'express'
const router = express.Router()
import Recentwork from '../schema/recentworkSchema.js'
import upload from '../multer/multer.js'
import cloudinary from '../cloudnary/cloudnary.js'



router.get('/', async (req, res) => {
    try {
        const recentworks = await Recentwork.find()
        res.status(200).json(recentworks)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const recentworks = await Recentwork.findById({_id: req.params.id})
        res.status(200).json(recentworks)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.post('/', upload.single('image'), async (req, res) => {
    const { name, description, links, tecnologies, features, stack, duration, rate } = req.body
    console.log(tecnologies)
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'recentwork',
        })
        const recentwork = await Recentwork.create({
            name,
            image : result.secure_url,
            description,
            links,
            tecnologies,
            features,
            stack,
            duration,
            rate
        })
        res.status(200).json(recentwork)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})




export default router