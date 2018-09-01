const _ = require('underscore')
const User = require('../models/User')

class UserController {

  async setAddress (req, res) {
    const address = _.pick(req.body, 'phone', 'addressLine1', 'addressLine2', 'city', 'state', 'pincode')
    try {
      await User.updateOne({ _id: req.user._id }, { $set: { address } })
      res.json({ message: 'successfully added address' })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        error: {
          message: 'unable to set address'
        }
      })
    }
  }
}

module.exports = UserController