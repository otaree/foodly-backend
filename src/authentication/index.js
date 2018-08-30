const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt')

const User = require('../models/User')

class Authentication {

  signUp () {
    return new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      session: false
    }, async function ( email, password, done) {
      try {
        const user = await User.findOne({ email })
        if (user) return done(null, false, { message: 'email already registered'})
        await new User({ email, password }).save()
        done(null)
      } catch (error) {
        done(error)
      }
    })
  }

  login () {
    return new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      session: false
    }, async function (email, password, done) {
      try {
        const user = await User.findOne({ email })
        if (!user) return done(null, false, { message: 'email not registered' })
        const validPassword = await user.comparePassword(password)
        if (!validPassword) return done(null, false, { message: 'wrong password' })
        done(null, user)
      } catch (error) {
        done(error)
      }
    })
  }

  isAuthenticate () {
    return new passportJWT.Strategy({
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    }, async (payload, done) => {
      try {
        const user = await User.findOne({ _id: payload._id })
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
      } catch (error) {
        done(error)
      }
    })
  }
}

module.exports = Authentication;