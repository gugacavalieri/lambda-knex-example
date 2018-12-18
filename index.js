const { Users } = require('./model/users.js')

/* select all users */
const query = Users.select(['id', 'name'])
  .then(data => {
    console.log(data)

    data.forEach(item => {
      console.log(item.id)
    })

  })

/* select single user */
const query = Users.whereId(1).then(data => {
  console.log(data)
})
