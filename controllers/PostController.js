const { User, Post, Comment } = require('../models')

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    if (req.headers.authorization) {
      console.log(req.headers.authorization.split(' ')[1])
    }

    console.log(req.session)
    console.log(req.session.id)
    res.send(posts)
  } catch (err) {
    throw err
  }
}

const createPost = async (req, res) => {
  try {
    const user_id = req.body.userid
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

const delPost = async (req, res) => {
  try {
    const postid = parseInt(req.body.postid)
    await Post.destroy({ where: { id: postid } })
    res.send({ message: `Post ${postid} Delete successful` })
  } catch (err) {
    throw err
  }
}

const getPostByid = async (req, res) => {
  try {
    let id = parseInt(req.body.postid)
    let result = await Post.findOne({ where: { id: id } })
    console.log(result)
    res.send(result)
  } catch (err) {
    throw err
  }
}

module.exports = {
  getPosts,
  createPost,
  delPost,
  getPostByid
}
