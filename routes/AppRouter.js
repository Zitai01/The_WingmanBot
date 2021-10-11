const Router = require('express').Router()
const DbRouter = require('./DbRouter')
const AuthRouter = require('./AuthRouter')
Router.use('/db', DbRouter)
Router.use('/auth', AuthRouter)
module.exports = Router
