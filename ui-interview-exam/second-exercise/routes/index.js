const express = require('express')
const movies = require('./movies')
const users = require('./users')

module.exports = () => {
  const router = express.Router()

  router.use('/movies', movies)
  router.use('/users', users)

  router.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
    next()
  })

  return router
}
