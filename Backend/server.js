const express = require('express')
const path   = require('path')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv') 

// connect env file 
dotenv.config({ path:'./config/config.env'})

/* DB CONNECTIONS */
const connectDB = require('./config/db')
connectDB()

// link routes file 
const apiRoutes = require('./routers/todosRoutes')

const app = express()
const PORT = process.env.PORT || 5000 ;

app.use(express.json()); 

if( process.env.NODE_ENV == 'development')app.use(morgan('dev'))

// use routes

app.use('/api/v1/todos',apiRoutes)




app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} at port: ${PORT}`.yellow.bold)); 