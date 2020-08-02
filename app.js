'use strict';

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3333
const morgan = require('morgan')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('', (req, res) => {
    res.send({
        greetings: 'Hello World'
    })
})

app.listen(PORT, () => {
    console.log(`Application is listening to PORT ${PORT}`)
})