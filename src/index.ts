import express from 'express'
import cors from 'cors'
// @ts-expect-error ts-migrate(2306) FIXME: File '/home/mehulkc/Projects/contacts-ts/contacts/... Remove this comment to see the full error message
import makeConnection from './db/mongodb'
// @ts-expect-error ts-migrate(2306) FIXME: File '/home/mehulkc/Projects/contacts-ts/contacts/... Remove this comment to see the full error message
import routes from './routes/routes'
import dotenv from 'dotenv'

dotenv.config()

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
