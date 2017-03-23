const express = require('express')
const exp = express()

exp.get('/', (req, res) => {
    res.send('Hello World!')
})

exp.get('/time', (req, res) => {
	let date = new Date()
    res.send(date.toISOString())
})

exp.listen(8080)
