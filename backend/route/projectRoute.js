import express from 'express'
const router = express.Router()
import Project from '../schema/projectSchema.js'
import upload from '../multer/multer.js'
import cloudinary from '../cloudnary/cloudnary.js'



router.get('/', async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const projects = await Project.findById(req.params.id)
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})



router.post('/', upload.single('image'), async (req, res) => {
    const { name, description, siteType, role, feature, tecnoliges, links, buyer, selary} = req.body
    try{
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'project',
        })
        const projects = await Project.create({
            name,
            image : result.secure_url,
            description,
            siteType,
            role,
            features : feature,
            technologies : tecnoliges,
            link : links,
            buyer,
            gotPrice: selary
        })
        res.status(200).json(projects)
    }catch(err){
        console.log(err)
    }
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const projects = await Project.findByIdAndDelete(id)
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})



export default router