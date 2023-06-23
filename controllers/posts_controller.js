const express = require('express')
const router = express.Router()

// models
const Post = require('../models/post')

// routes
router.get('/', (req, res) => {
  Post
    .findAll()
    .then(posts => res.json(posts))
})

router.post('/', (req, res) => {
  const name = req.body.name
  const message = req.body.message
  const skills = req.body.skills

  Post
    .create(name, message, skills)
    .then(post => res.json(post))
})

router.delete('/:id', (req, res) => {
  const postId = req.params.id

  Post
    .delete(postId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router