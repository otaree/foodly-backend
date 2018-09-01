const jwt = require('jsonwebtoken')
const CartService = require('../services/cart.services')


class AuthRoutes {
  constructor (app, passport) {
    this.app = app
    this.passport = passport
    this.cartService = new CartService()
  }

  routes () {
    this.app.post('/signup', (req, res, next) => {
      this.passport.authenticate('signup', (err, user, info) => {
        if (info) {
          return res.status(400).json({ 
           error: info
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
      this.passport.authenticate('login', async (err, user, info) => {
        if (err) {
          return res.status(400).json()
        }
        if (info) {
          return res.status(400).json({ error: info })
        }
        try {
          const cart = await this.cartService.getUserCart(user, req.body.cart)
          res.json({
            user,
            cart,
            token: this.createToken(user)
          })
        } catch (error) {
          console.error(error)
          res.status(401).json()
        }
      })(req, res, next)
    })
  }

  createToken (user) {
    return jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET)
  }
  
}

module.exports = AuthRoutes;