import express from 'express'
const router = express.Router()
import Consultant from '../schema/consultantSchema.js'



router.get('/', async (req, res) => {
    try {
        const consultants = await Consultant.find()
        res.status(200).json(consultants)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.post('/', async (req, res) => {
    const {name, phone, email, duration, subject, timeStand, cost} = req.body
    try {
        const consultant = await Consultant.create({
            name,
            phone,
            email,
            duration,
            subject,
            timeStand,
            cost
        })
        res.status(200).json(consultant)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})



router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const consultant = await Consultant.findByIdAndDelete(id)
        res.status(200).json(consultant)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})






export default router