import express from 'express'
const router = express.Router()


router.get('/', (req, res) => {
    res.send('skill')
})




export default router