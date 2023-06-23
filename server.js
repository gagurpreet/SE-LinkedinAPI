const express = require('express')


const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')


const postsController = require('./controllers/posts_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')


const app = express()
const PORT = 3001

app.listen(PORT, () => console.log(`Server is listening here: http://localhost:${PORT}`))


app.use(logger)
app.use(express.static('client'))
app.use(express.json())

app.use(sessions)


app.use('/api/post', postsController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)

// let users = []

// app.get('/users', (req, res) => {
// 	res.json({users})
// })

// app.post('/users', (req, res) => {
// 	users = req.body.users 
// 	res.json({users})
// })