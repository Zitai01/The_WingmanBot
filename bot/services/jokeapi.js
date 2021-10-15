const axios = require('axios')

async function getJoke() {
  let result = await axios.get(
    'https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw'
  )
  return result
}
module.exports = {
  getJoke
}
