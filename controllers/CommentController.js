const { User, Post, Comment } = require('../models')

const getCommentsBypostid = async (req, res) => {
  let postid = req.body.postid
  let result = await Comment.findAll({ where: { postid: parseInt(postid) } })
  res.send(result)
}

const creatComment = async (req, res) => {
  let body = req.body
  let result = await Comment.create(body)
  res.send(result)
}

const delComment = async (req, res) => {
  try {
    let id = req.body.id
    await Comment.destroy({ where: { id: id } })
    res.send({ message: `Comment ${id} Delete successful` })
  } catch (err) {
    throw err
  }
}

module.exports = {
  getCommentsBypostid,
  creatComment,
  delComment
}
