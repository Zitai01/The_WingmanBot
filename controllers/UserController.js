const { User, Post, Comment } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let username = req.body.userName
    let user_id = req.body.user_id
    let avatar = req.body.avatar
    let body = {
      user_id: user_id,
      username: username,
      avatar: avatar,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const result = await User.create(body)
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  CreateUser
}
