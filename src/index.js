const express = require('express')
const cors = require('cors')
const makeConnection = require('./db/mongodb')
const routes = require('./routes/routes')

require('dotenv/config')

const app = express()
app.use(express.json())
app.use(cors())

makeConnection()
/**
 * test route
 */
app.get('/', (req, res) => {
  res.json({ success: true })
})
/**
 * Route Configuration
 * */
app.use('/', routes)

app.listen(process.env.PORT, () => {
  console.info(`[server] ->🚀 started on ${process.env.PORT}`)
  console.info(
    `[${process.env.NODE_ENV}] -> http://localhost:${process.env.PORT}`
  )
})
