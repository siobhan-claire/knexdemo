
exports.up = function(knex, Promise) {
  return knex.schema.table('toys', function (table) {
    table.integer('number-of-toys')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('toys', function (table) {
    table.dropColumn('number-of-toys')
  })
};
