const Router = require('express').Router()
const userController = require('../controllers/UserController')
const postController = require('../controllers/PostController')
const commentController = require('../controllers/CommentController')
const configController = require('../controllers/ConfigController')
const auth = require('../middleware/auth')
//User Controllers
Router.get('/user/', userController.GetUsers)
Router.post(
  '/user/',
  auth.stripToken,
  auth.verifyToken,
  userController.CreateUser
)
Router.put('/user/id', userController.getUserbyid)
Router.put('/user/discordid', userController.getUserbyDiscordid)
//Post Controllers
Router.get('/post/', postController.getPosts)
Router.post(
  '/post/',
  auth.stripToken,
  auth.verifyToken,
  postController.createPost
)
Router.delete('/post', postController.delPost)
Router.put('/post', postController.getPostByid)
//Comment Controllers

Router.put('/comment', commentController.getCommentsBypostid)
Router.post(
  '/comment',
  auth.stripToken,
  auth.verifyToken,
  commentController.creatComment
)
Router.delete('/comment/:id', commentController.delComment)
//Config Controllers
Router.post('/config', configController.createConfig)
Router.get('/config/:guildid', configController.getConfigByGuildid)
Router.put('/config/msg', configController.updateMsg)
Router.put('/config/triggermsg', configController.updateTriggerMsg)
module.exports = Router
