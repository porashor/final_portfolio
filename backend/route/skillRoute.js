import express from 'express'
const router = express.Router()
import Skill from '../schema/skillSchema.js'
import upload from '../multer/multer.js'
import cloudinary from '../cloudnary/cloudnary.js'


router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find()
        res.status(200).json(skills)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post('/', upload.single('image'), async (req, res) => {
    const { name, pogress, description, state } = req.body
    console.log(req.body, req.file.buffer)
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'skill',
        })
        console.log(result)

        const skill = await Skill.create({
            name,
            image : result.secure_url,
            pogress,
            description,
            state
        })
        res.status(200).json(skill)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id)
        res.status(200).json(skill)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default router