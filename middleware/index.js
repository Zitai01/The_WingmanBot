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
  //   Gets the token stored in the request lifecycle state
  let payload = jwt.verify(token, APP_SECRET)
  //   Verifys the token is legit
  if (payload) {
    res.locals.payload = payload // Passes the decoded payload to the next function

    //   Calls the next function if the token is valid
    return next()
  }
  res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
}

module.exports = {
  stripToken,
  verifyToken
}
