const { knex } = require('../model/connection.js')

const createTable = async () => {

  try {
    const result = await knex.schema.createTable('users', table => {
      console.log ('table created !')
      table.increments()
      table.string('name')
      table.timestamps()
    })

    console.log(result)
  } catch (e) {
    console.log(e)
  }

}

createTable()
