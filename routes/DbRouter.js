const Router = require('express').Router()
const userController = require('../controllers/UserController')

Router.get('/user/', userController.GetUsers)
Router.post('/user/', userController.CreateUser)

module.exports = Router
