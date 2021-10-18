const { Client, Intents } = require('discord.js')
const { getJoke } = require('./services/jokeapi')
const { Guild_config } = require('../models')
const { guild_controller } = require('../controllers/ConfigController')
require('dotenv').config()
//const { Msg } = require('../models')
//const controller = require('../controllers/DatabaseController')
const token = process.env.DISCORD_BOT_TOKEN
const axios = require('axios')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})
function startBot() {
  client.on('ready', () => {
    console.log(`${client.user.tag}is ready`)
  })
  client.on('message', async (message) => {
    let guildId = message.guildId
    // joke function
    let joke = 'wb joke'
    console.log(joke)
    if (message.author.bot) return

    async function getmsg() {
      const config = await Guild_config.findOne({
        where: { guildid: guildId }
      })

      return config
    }

    if (message.content.toLowerCase() === joke) {
      //get jokes
      let result = await getJoke()

      if (result.data.type === 'single') {
        message.channel.send(result.data.joke)
      } else if (result.data.type === 'twopart') {
        message.channel.send(result.data.setup)
        message.channel.send(result.data.delivery)
      }
    } else if (message.content.toLowerCase() !== joke) {
      let config_data = await getmsg()
      if (message.content.toLowerCase() === config_data.triggermsg) {
        message.channel.send(config_data.msg)
      }
    }
  })
  client.login(token)
}

module.exports = {
  startBot
}
