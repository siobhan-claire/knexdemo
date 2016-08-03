
exports.up = function(knex, Promise) {
  return knex.schema.createTable('toys', function (table){
    table.increments('id').primary()
    table.string('morning-toy')
    table.string('evening-toy')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('toys')
};
