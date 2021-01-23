
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { id: 1, name: "Soup Noodles", units: "lb"},
    { id: 2, name: "Chicken", units: "lb"},
    { id: 3, name: "Broth", units: "oz"},
    { id: 4, name: "Barrels", units: "lb"},
    { id: 5, name: "Spaghetti", units: "lb"},
    { id: 6, name: "Linguine", units: "lb"},
    { id: 7, name: "Tomato Sauce", units: "oz"},
    { id: 8, name: "Hampurrger", units: "lb"},
    { id: 9, name: "Parsley", units: "gram"},
    { id: 10, name: "Garlic", units: "tbspn"},
    { id: 11, name: "Red Peppers", units: "oz"},
  ]);
};
