const jwt = require('jsonwebtoken')

class AuthRoutes {
  constructor (app, passport) {
    this.app = app
    this.passport = passport
  }

  routes () {
    this.app.post('/signup', (req, res, next) => {
      this.passport.authenticate('signup', (err, user, info) => {
        if (info) {
          return res.status(400).json({ 
           error: info.message
          })
        }

        if (err) {
          console.error(err)
          return res.status(400).json()
        }

        res.json({
          message: 'Registration successful'
        })
      })(req, res, next)
    })

    this.app.post('/login', (req, res, next) => {
      this.passport.authenticate('login', (err, user, info) => {
        if (err) {
          console.error(err)
          return res.status(400).json()
        }
        if (info) return res.status(400).json({ error: info.message })
        res.json({
          token: this.createToken(user)
        })
      })(req, res, next)
    })
  }

  createToken (user) {
    return jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET)
  }
  
}

module.exports = AuthRoutes;