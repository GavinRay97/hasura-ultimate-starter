const express = require('express')
const app = express()
const port = process.env.PORT || 3000

async function start() {
  app.get('/', async (req, res) => {
    res.json({ test: 'new' })
  })

  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
  })
}

start()