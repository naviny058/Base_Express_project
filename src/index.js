const express = require('express')
const { PORT } = require('./config')
const apiRoutes = require('./routes')
const { serverConfig } = require('../src/config')

const app = express()
app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, () => {
  console.log(`app is running http://localhost:${serverConfig.PORT}`)
}
)