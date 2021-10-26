const axios = require('axios')
require('dotenv').config()
const login = async (req, res) => {
  let code = req.query.code

  if (code == undefined) {
    res.send('Code undefined')
  }
  const params = new URLSearchParams()
  params.append(
    'redirect_uri',
    'https://wingmanbot.herokuapp.com/api/auth/login'
  )
  params.append('client_id', '893515753217720320')
  params.append('code', code)
  params.append('client_secret', process.env.CLIENT_SECRET)
  params.append('grant_type', 'authorization_code')
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  try {
    let respond = await axios.post(
      'https://discord.com/api/oauth2/token',
      params,
      config
    )

    token = respond.data.access_token
    req.session.token = token
    //  console.log(req.session)
    res.redirect(`https://wingmanbot.herokuapp.com/dashboard/${token}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  login
}
