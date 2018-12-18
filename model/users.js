const BaseModel = require('./base.js')

class Users extends BaseModel {
  constructor() {
    super('users')
  }
}

exports.Users = new Users()
