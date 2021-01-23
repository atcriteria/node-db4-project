const express = require('express');
const Helpers = require('./model');
const router = express.Router();

router.get('/', (req, res) => {
    Helpers.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.get('/shopping/:id', (req, res) => {
    Helpers.getShoppingList(req.params.id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.get('/instructions/:id', (req, res) => {
    Helpers.getInstructions(req.params.id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

module.exports = router;