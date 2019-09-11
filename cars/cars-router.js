const express = require('express');
const knex = require('knex');

const db = require('../data/db-config.js')

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(fruits => {
            res.json(fruits);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve cars' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id }).first()
        .then(fruit => {
            res.json(fruit);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve car' });
        });
});

router.post('/', (req, res) => {
    const fruitData = req.body;
    db('cars').insert(fruitData)
        .then(ids => {
            db('fruits').where({ id: ids[0] })
                .then(newFruitEntry => {
                    res.status(201).json(newFruitEntry);
                });
        })
        .catch(err => {
            console.log('POST error', err);
            res.status(500).json({ message: "Failed to store data" });
        });
});

module.exports = router;