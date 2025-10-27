import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import skillRoute from './route/skillRoute.js'
dotenv.config()

const app = express()
const port = process.env.RUNNING_PORT
app.use(express.json())
connectDB()


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/skill', skillRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})