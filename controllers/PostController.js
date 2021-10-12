const { User, Post, Comment } = require('../models')

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (err) {
    throw err
  }
}

const createPost = async (req, res) => {
  try {
    const user_id = req.body.user_id
    const title = req.body.title
    const content = req.body.content
    let body = {
      userid: user_id,
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const result = await Post.create(body)
    res.send(result)
  } catch (err) {
    throw err
  }
}
module.exports = {
  getPosts,
  createPost
}
