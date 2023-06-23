const pg = require('pg')

let db
// if you're a WSL user
if (process.env.DB_PASSWORD) {
  db = new pg.Pool({
    database: 'SE_Linkedin',
    password: process.env.DB_PASSWORD
  })
} else { // if you're a Mac user
  db = new pg.Pool({
    database: 'SE_Linkedin'
  })
}

module.exports = db