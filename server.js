const express = require('express')


const app = express()
const PORT = 3001

app.listen(PORT, () => console.log(`Server is listening here: http://localhost:${PORT}`))



app.use(express.json())

let PostLoggedUser = []

app.get('/PostLoggedUser', (req, res) => {
	res.json({ PostLoggedUser })
})


app.post('/PostLoggedUser', (req, res) => {
	users = req.body.PostLoggedUser
	res.json({ PostLoggedUser })
})