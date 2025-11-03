import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import skillRoute from './route/skillRoute.js'
import projectRoute from './route/projectRoute.js'
import testimonialRoute from './route/testimonialRoute.js'
import blogRoute from './route/blogRoute.js'
import consultantRoute from './route/consultantRoute.js'
import cors from 'cors'
const app = express()
dotenv.config()
app.use(cors({
    origin: ['http://localhost:3000', "https://portfolio-cdhx.onrender.com"],
    credentials: true
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
app.use('/project', projectRoute)
app.use('/testimonial', testimonialRoute)
app.use('/blog', blogRoute)
app.use('/consultant', consultantRoute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})