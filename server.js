const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

let PostLoggedUser = []

app.get('/PostLoggedUser', (req, res) => {
	res.json({ PostLoggedUser })
})


app.post('/PostLoggedUser', (req, res) => {
	const user = req.body
	PostLoggedUser.push(user)
	res.json({ PostLoggedUser })
})

app.listen(PORT, () => console.log(`Server is listening here: http://localhost:${PORT}`));
