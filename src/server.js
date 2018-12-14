const express = require('express')
// session module
const session = require('express-session')
// module to store on fisical json
const FileStore = require('session-file-store')(session)
// module to treat paths from diferent SO's
const path = require('path')
const flash = require('connect-flash')

// express server configuration as class structure
class App {
  constructor () {
    this.express = express()
    // verify if is dev enviromnent
    this.isDev = process.env.NODE_ENV !== 'production'

    // load internal class methods on instance app class
    this.middleware()
    this.views()
    this.routes()
  }

  // method to treat middlewares
  middleware () {
    // active body from requisition
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(flash())
    // configure session to register on request session and inside a json file
    this.express.use(
      session({
        name: 'root',
        store: new FileStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions')
        }),
        secret: 'MyAppSecret',
        resave: true,
        saveUninitialized: true
      })
    )
  }

  // method to treat views
  views () {
    // make the public directory visible to express
    this.express.use(express.static(path.resolve(__dirname, 'public')))
    // declare the engine to render the views
    this.express.set('view engine', 'pug')
    this.express.set('views', path.resolve(__dirname, 'app', 'views'))
  }

  // method to treat routes
  routes () {
    this.express.use(require('./routes'))
  }
}

// export a already class instance of app
module.exports = new App().express
