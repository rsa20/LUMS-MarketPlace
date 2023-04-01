const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT  || 1000
const connectDataBase = require('./config/db')

connectDataBase()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/posts', require('./routes/postsRoutes'))
app.use('/api/search', require('./routes/searchRoutes'))


app.listen(port, ()=> console.log(`Server started on port ${port}`))

