const { Client, Intents } = require('discord.js')
const { getJoke } = require('./services/jokeapi')
require('dotenv').config()
//const { Msg } = require('../models')
//const controller = require('../controllers/DatabaseController')
const token = process.env.DISCORD_BOT_TOKEN
const axios = require('axios')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
  console.log(`${client.user.tag}is ready`)
})
client.on('message', async (message) => {
  //   async function getreq() {
  //     let req = await Msg.findByPk(2)
  //     let reqmsg = req.message
  //     console.log(reqmsg)
  //     return reqmsg
  //   }
  //   let repyto = await getreq()
  let repyto = 'wb joke'
  console.log(repyto)
  if (message.author.bot) return
  if (message.content.toLowerCase() === repyto) {
    let guildId = message.guildId
    // async function getmsg() {
    //   let msg = await Msg.findByPk(1)
    //   let message = msg.message
    //   return message
    // }
    // let messages = await getmsg()

    //get jokes
    let result = await getJoke()

    if (result.data.type === 'single') {
      message.channel.send(result.data.joke)
    } else if (result.data.type === 'twopart') {
      message.channel.send(result.data.setup)
      message.channel.send(result.data.delivery)
    }
  }
})
client.login(token)
