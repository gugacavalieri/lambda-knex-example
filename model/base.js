const { knex } = require('./connection.js')

class BaseModel {
  constructor(tableName) {
    this.tableName = tableName
  }

  select(columns) {
    return knex.select(columns)
    .from(this.tableName)
  }

  whereId(id) {
    return knex.table(this.tableName).first().where({id})
  }
}

module.exports = BaseModel
