const express = require('express')
const app = express()
const PORT = 3001

app.listen(PORT, () => console.log(`Server is listening here: http://localhost:${PORT}`))

app.use(express.json())

let users = []

app.get('/users', (req, res) => {
	res.json({users})
})

app.post('/users', (req, res) => {
	users = req.body.users 
	res.json({users})
})