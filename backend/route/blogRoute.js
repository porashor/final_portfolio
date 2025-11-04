import express from "express"
import Blog from "../schema/blogSchema.js"
import upload from "../multer/multer.js"
import cloudinary from "../cloudnary/cloudnary.js"

const router = express.Router()



router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.post('/', upload.single("image"), async (req, res) => {
    const { title, description, autor } = req.body
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'blog',
        })
        const blog = await Blog.create({
            title,
            image : result.secure_url,
            description,
            autor
        })
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})




export default router