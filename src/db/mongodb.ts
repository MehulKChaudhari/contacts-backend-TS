//  FIXME: Cannot redeclare block-scoped variable 'mongoose'.
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'mongoose'.
const mongoose = require('mongoose')

/**
 * This function creates connection to the database with given options.
 * */
const makeConnection = async () => {
  await mongoose
    .connect(process.env.DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.info(`[${process.env.NODE_ENV}]` + '📀 Connected to Database')
    })
    .catch((error: any) => {
      console.error(
        `There was an error while connecting to database. 
			You likely forgot to include mongoDB connection URL or it is invalid.`,
        error
      )
    })
}

module.exports = makeConnection
