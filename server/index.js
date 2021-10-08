//that is the starting point of our server application
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/post.js'

//inicialize this app
const app = express()

app.use('/posts',postRoutes)

app.use(express.json({limit: "30mb", extended : true}))

app.use(express.urlencoded({limit: "30mb", extended : true}))

app.use(cors())

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://joserafael:joserafael123@cluster0.rixtz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'//all the information from mongo db altas

const PORT = process.env.PORT || 5000;




//that make sure we don't have any wornings on the console
mongoose.connect(CONNECTION_URL, {})
.then(() => app.listen(PORT,() => console.log(`Server Running on port: ${PORT}`)))
.catch((error) => console.log(error.message))

