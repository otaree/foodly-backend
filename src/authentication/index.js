const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const _ = require('underscore')

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
        if (user) return done(null, false, { field: 'email', message: 'email already registered'})
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
        if (!user) return done(null, false, { field: 'email', message: 'email not registered' })
        const validPassword = await user.comparePassword(password)
        if (!validPassword) return done(null, false, { field: 'password', message: 'wrong password' })
        done(null, _.pick(user, '_id', 'email', 'address'))
      } catch (error) {
        done(error)
      }
    })
  }

  isAuthenticate () {
    return new passportJWT.Strategy({
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true
    }, async (req, payload, done) => {
      try {
        const user = await User.findOne({ _id: payload._id })
        if (user) {
          req.user = _.pick(user, '_id', 'email', 'address')
          done(null, _.pick(user, '_id', 'email', 'address'))
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