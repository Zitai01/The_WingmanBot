const stripToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  let servertoken = req.session.token
  console.log('token')
  console.log(token)
  console.log(servertoken)
  if (token === servertoken) {
    res.locals.token = token
    return next()
  }
  res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
}

module.exports = {
  stripToken,
  verifyToken
}
