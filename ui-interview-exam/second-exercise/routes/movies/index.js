const express = require('express')
const http = require('http')

module.exports = () => {
  const router = express.Router()

  router.get('/search', async (req, res, next) => {
    try {
      const url = `http://www.omdbapi.com/?s=${req.query.q}&apikey=${process.env.OMDBAPIKEY}`

      http.get(url, (apiResponse) => {
        let rawData = ''

        apiResponse.on('data', (chunk) => { rawData += chunk })

        apiResponse.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData)
            const finalResult = []
            parsedData.Search.forEach((item) => {
              finalResult.push(item)
            })
            res.json(finalResult)
            next()
          } catch (e) {
            next(e)
          }
        })
      })
    } catch (e) {
      next(e)
    }
  })

  return router
}
