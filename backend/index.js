import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import skillRoute from './route/skillRoute.js'
import cors from 'cors'
const app = express()
dotenv.config()
app.use(cors({
    origin: 'http://localhost:3000'
}))
connectDB()



const port = process.env.RUNNING_PORT
app.use( express.json());
app.use( express.urlencoded({ extended: true }));
//
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/skill', skillRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})