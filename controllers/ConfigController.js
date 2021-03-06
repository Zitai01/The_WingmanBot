const { User, Post, Comment, Guild_config } = require('../models')

const getConfigByGuildid = async (req, res) => {
  try {
    let guildid = req.params.guildid

    const user = await Guild_config.findOne({
      where: { guildid: guildid }
    })
    res.send(user)
  } catch (err) {
    throw err
  }
}

const createConfig = async (req, res) => {
  try {
    const user_id = req.body.userid
    const guildid = req.body.guildid
    const msg = req.body.msg
    const triggermsg = req.body.triggermsg
    let body = {
      userid: user_id,
      guildid: guildid,
      msg: msg,
      triggermsg: triggermsg,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const result = await Guild_config.create(body)
    res.send(result)
  } catch (err) {
    throw err
  }
}
const updateMsg = async (req, res) => {
  try {
    let guildid = req.body.guildid

    await Guild_config.update(
      { msg: `${req.body.msg}` },
      {
        where: { guildid: guildid }
      }
    )

    return res.send({ message: `request updated to ${req.body.msg} ` })
  } catch (err) {
    throw err
  }
}
const updateTriggerMsg = async (req, res) => {
  try {
    let guildid = req.body.guildid

    await Guild_config.update(
      { triggermsg: `${req.body.triggermsg}` },
      {
        where: { guildid: guildid }
      }
    )

    return res.send({ message: `request updated to ${req.body.triggermsg} ` })
  } catch (err) {
    throw err
  }
}

module.exports = {
  getConfigByGuildid,
  createConfig,
  updateMsg,
  updateTriggerMsg
}
