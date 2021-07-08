'use strict';
const express = require('express');
const router = express.Router();
const DiningModel = require('../models/DiningModel');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const diningChoices = await DiningModel.getDining(id);
    console.log('DINING: ', diningChoices)
    res.render('template', {
        locals: {
            title: 'Dining Selection',
            diningData: diningChoices,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/dining'
        }
        
    });
});


router.post('/add', async (req, res) => {
    const { plan_id } = req.session;
    const { dining_id, park_id } = req.body;
    const response = await DiningModel.addDining(plan_id, dining_id);
    console.log('DINING RESPONSE IS: ', response);
    res.redirect(`/`);
});


module.exports = router;