import express from 'express'
import './connections/db.js'
import { corsOptions } from './connections/corsPolicy.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'

const app = express()

import userRouter from './routes/userRouter.js'

app.use(fileUpload())
app.use(express.static('public'))
app.use(express.json())
app.use(cors(corsOptions))

app.use('/', userRouter)

app.listen(3000, ()=>{
    console.log(`http://localhost:3000`)
})