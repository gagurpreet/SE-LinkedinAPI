const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const bodyParser = require('body-parser')
const session = require('./middlewares/sessions')
const logger = require('./middlewares/logger')
const postsController = require('./controllers/posts_controller')
const sessionsController = require('./controllers/sessions_controller')
const usersController = require('./controllers/users_controller')

const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(session)
app.use(logger)


app.use('/posts', postsController)
app.use('/sessions', sessionsController)
app.use('/users', usersController)



app.listen(PORT, () => console.log(`Server is listening here: http://localhost:${PORT}`));

app.use(cors({ origin:'http:localhost:3000' }))
