exports.up = function(knex, Promise) {
  return knex.schema.createTable('group', function(table) {
    table.increments()
    table.varchar('name', 255).notNullable()
    table.json('teams').nullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('group')
}
