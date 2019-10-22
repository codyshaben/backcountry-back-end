
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.text('username')
        table.text('token')
        table.text('password_digest')
        table.timestamp('created_at')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};  

