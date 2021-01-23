exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { id: 1, direction: "Turn the stove on with the water in the bucket.", step_num: 1, recipe_id: 1},
    { id: 2, direction: "Wait for the water to boil, but don't let it boil over.", step_num: 2, recipe_id: 1},
    { id: 3, direction: "Shhhluurrppp.", step_num: 3, recipe_id: 1},
    { id: 4, direction: "Spaghetti spaghetti", step_num: 1, recipe_id: 2},
    { id: 5, direction: "Nooooooot yet", step_num: 2, recipe_id: 2},
    { id: 6, direction: "Whoop whoop, strong tomato! Spaghetti is ready!", step_num: 3, recipe_id: 2},
  ]);
};