const { User, Post, Comment } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    console.log(req.authorization)
    res.send(users)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let username = req.body.username
    let user_id = req.body.user_id
    let avatar = req.body.avatar
    const nodup = await User.findAll({ where: { user_id: user_id } })
    console.log('duplicatarry')
    console.log(nodup)
    if (nodup.length < 1) {
      let body = {
        user_id: user_id,
        username: username,
        avatar: avatar,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const result = await User.create(body)
      res.send(result)
    } else {
      res.status(400).send('user_id Already registered')
    }
  } catch (error) {
    throw error
  }
}

const getUserbyid = async (req, res) => {
  try {
    let id = req.body.id
    if (id == null) {
      res.send(null)
    }
    console.log(req.body)
    const user = await User.findOne({
      where: { id: parseInt(id) }
    })
    res.send(user)
  } catch (err) {
    throw err
  }
}
const getUserbyDiscordid = async (req, res) => {
  try {
    let id = req.body.user_id
    if (id == null) {
      res.send(null)
    }
    console.log(req.body)
    const user = await User.findOne({
      where: { user_id: id }
    })
    res.send(user)
  } catch (err) {
    throw err
  }
}
module.exports = {
  GetUsers,
  CreateUser,
  getUserbyid,
  getUserbyDiscordid
}
