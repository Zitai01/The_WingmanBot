const app = require('express')()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const AppRouter = require('./routes/AppRouter')

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

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
