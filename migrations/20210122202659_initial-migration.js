
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('id')
        tbl.string('recipe_name', 128).notNullable()
        tbl.string('description', 256)
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id')
        tbl.string('name', 128).notNullable().unique()
        tbl.string('units', 128).notNullable()
    })
    .createTable('instructions', tbl => {
        tbl.increments('id')
        tbl.string('direction', 256).notNullable()
        tbl.integer('step_num').notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')

        tbl.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')

        tbl.integer('quantity').notNullable()
    })
};

exports.down = function(knex) {
  
};
