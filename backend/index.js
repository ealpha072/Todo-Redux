import dotenv from 'dotenv'
dotenv.config({path: './.env'})
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/todo.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('build'))

app.use('/todos', router)

const url = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`)))
.catch(err => console.log(err.message))
