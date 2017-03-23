const express = require('express')
const exp = express()

exp.get('/', (req, res) => {
    res.send('Hello World!')
})

exp.get('/time', (req, res) => {
	let date = new Date()
    res.send(date.toISOString())
})

const { PORT } = process.env

PORT ? exp.listen(PORT) : exp.listen(8080)
