const server = require('./server')

server.listen(process.env.port || 3000, () =>
  console.log(`server is active on port ${process.env.port || 3000}`)
)
