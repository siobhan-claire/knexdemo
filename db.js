var development = require ('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}

function getUsers () {
  return knex('users')
    .select()
}

function getUser (id) {
  return knex('users')
  .select()
  .where('id', id)
}

function createUser (id, name, description) {
  return knex('users')
  .insert({
    id: id,
    name: name,
    description: description
  })
}

function updateUser (id, update) {
  return knex('users')
    .update(update)
    .where('id', id)
}

function deleteUser (id) {
  return knex('users')
    .del()
    .where('id', id)
}
