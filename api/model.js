const db = require('../data/db-config');

const getRecipes = () => {
    return db('recipes')
}

const getShoppingList = (id) => {
    /*

    select i.name, ri.quantity
    from recipe_ingredients as ri
        join recipes as r
            on ri.recipe_id = r.id
        join ingredients as i
            on i.id = ri.ingredients_id
    where r.id = 1

    */
   console.log(id)
    return db('recipe_ingredients as ri')
        .join('recipes as r', 'ri.recipe_id', 'r.id')
        .join('ingredients as i', 'i.id', 'ri.ingredients_id')
        .select('i.name', 'ri.quantity')
        .where('r.id', '=', id)
}

const getInstructions = (id) => {

    /*

    select ins.step_num, ins.direction
    from instructions as ins
        join recipes as r
            on r.id = ins.recipe_id
    where r.id = 1
    order by ins.step_num

    */

    return db('instructions as ins')
        .join('recipes as r', 'r.id', 'ins.recipe_id')
        .select('ins.step_num', 'ins.direction')
        .where('r.id', '=', id)
        .orderBy('ins.step_num')

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}