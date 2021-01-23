
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { id: 1, recipe_name: "Soup", description: "This is some really good soup, ya hear?"},
    { id: 2, recipe_name: "Spawghetti", description: "Take what you thought you knew about mom's spaghetti and throw it in the garbage. We're making it today."},
  ]);
};
