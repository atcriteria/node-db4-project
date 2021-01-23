
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredients_id: 2, quantity: 20},
    { recipe_id: 1, ingredients_id: 1, quantity: 5},
    { recipe_id: 1, ingredients_id: 3, quantity: 4},
    { recipe_id: 1, ingredients_id: 4, quantity: 4},
    { recipe_id: 1, ingredients_id: 5, quantity: 3},
    { recipe_id: 2, ingredients_id: 6, quantity: 2},
    { recipe_id: 2, ingredients_id: 7, quantity: 7},
    { recipe_id: 2, ingredients_id: 8, quantity: 8},
    { recipe_id: 2, ingredients_id: 9, quantity: 9},
    { recipe_id: 2, ingredients_id: 10, quantity: 10},
    { recipe_id: 2, ingredients_id: 11, quantity: 50},
  ]);
};