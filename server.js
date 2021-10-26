const app = require('express')()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const AppRouter = require('./routes/AppRouter')
const startBot = require('./bot/index')
const serveStatic = require('serve-static')
const path = require('path')

const PORT = process.env.PORT || 3001

//app.use(cors())
app.use(cors({ credentials: true, origin: true }))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('trust proxy', 1)
app.use(
  session({
    secret: 'lokiboy',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 3600000
    }
  })
)

app.use('/api', AppRouter)

//if (process.env.NODE_ENV === 'production') {
app.use('/', serveStatic(path.join(__dirname, 'client/dist')))
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, `/client/dist/index.html`))
})
//}

app.listen(PORT, () => {
  console.log(`Server Started On Port: ${PORT}`)
  startBot.startBot()
})
