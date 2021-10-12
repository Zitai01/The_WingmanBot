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

const updateCommant = async (req, res) => {}

const delComment = async (req, res) => {}

module.exports = {
  getCommentsBypostid,
  creatComment
}
