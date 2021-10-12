const Router = require('express').Router()
const userController = require('../controllers/UserController')
const postController = require('../controllers/PostController')
const commentController = require('../controllers/CommentController')

//User Controllers
Router.get('/user/', userController.GetUsers)
Router.post('/user/', userController.CreateUser)
Router.put('/user/id', userController.getUserbyid)
//Post Controllers
Router.get('/post/', postController.getPosts)
Router.post('/post/', postController.createPost)
Router.delete('/post', postController.delPost)
//Comment Controllers

Router.get('/comment', commentController.getCommentsBypostid)
Router.post('/comment', commentController.creatComment)

module.exports = Router
