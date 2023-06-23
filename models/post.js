const db = require('../db/db')

const Post = {
  findAll: () => {
    const sql = 'SELECT * FROM posts'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (name, message, skills) => {
    const sql = `
      INSERT INTO posts(name, message, skills)
      VALUES ($1, $2, $3)
      RETURNING *
    `

    return db
      .query(sql, [name, message, skills])
      .then(dbRes => dbRes.rows[0])
  },

  delete: (postId) => {
    const sql = 'DELETE FROM posts WHERE id = $1'

    return db.query(sql, [postId])
  }
}

module.exports = Post