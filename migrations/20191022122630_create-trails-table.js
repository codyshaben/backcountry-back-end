exports.up = function(knex) {
    return knex.schema.createTable('trails', (table) => {
        table.increments('id')
        table.integer('trail_id')
        table.text('name')
        table.text('location')
        table.text('summary')
        table.text('difficulty')
        table.float('stars')
        table.integer('reviews')
        table.text('image_one')
        table.text('image_two')
        table.text('image_three')
        table.text('image_four')
        table.float('length')
        table.integer('ascent')
        table.integer('high')
        table.integer('low')
        table.float('lng')
        table.float('lat')
        table.text('condition_status')
        table.text('condition_details')
        table.text('condition_date')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('trails')

};