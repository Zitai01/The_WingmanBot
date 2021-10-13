const Router = require('express').Router()
const userController = require('../controllers/UserController')
const postController = require('../controllers/PostController')
const commentController = require('../controllers/CommentController')

//User Controllers
Router.get('/user/', userController.GetUsers)
Router.post('/user/', userController.CreateUser)
Router.put('/user/id', userController.getUserbyid)
Router.put('/user/discordid', userController.getUserbyDiscordid)
//Post Controllers
Router.get('/post/', postController.getPosts)
Router.post('/post/', postController.createPost)
Router.delete('/post', postController.delPost)
Router.put('/post', postController.getPostByid)
//Comment Controllers

Router.put('/comment', commentController.getCommentsBypostid)
Router.post('/comment', commentController.creatComment)
Router.delete('/comment/:id', commentController.delComment)
module.exports = Router
