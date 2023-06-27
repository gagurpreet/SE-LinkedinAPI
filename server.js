const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const bodyParser = require('body-parser')
const session = require('./middlewares/sessions')
const logger = require('./middlewares/logger')
const postsController = require('./controllers/posts_controller')
const sessionsController = require('./controllers/sessions_controller')
const usersController = require('./controllers/users_controller')

const app = express()


app.use(bodyParser.json())
app.use(session)
app.use(logger)


app.use('/posts', postsController)
app.use('/sessions', sessionsController)
app.use('/users', usersController)


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is listening here: http://localhost:${port}`));

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
