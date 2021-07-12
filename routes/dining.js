'use strict';
const express = require('express');
const router = express.Router();
const DiningModel = require('../models/DiningModel');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const park_id = id;
    const diningChoices = await DiningModel.getDining(id);
    res.render('template', {
        locals: {
            title: 'Walk Disney | Choose Your Dining',
            diningData: diningChoices,
            is_logged_in: req.session.is_logged_in,
            park_id: park_id
        },
        partials: {
            body: 'partials/dining'
        }
        
    });
});


router.post('/add', async (req, res) => {
    const { dining_id, park_id } = req.body;
    const user_id = req.session.user_id;
    const response = await DiningModel.addDining(user_id, dining_id, park_id);

    const referral = req.header('Referrer');
    const rootUrl = referral.split('?');
    const redirectUrl = rootUrl[0] + '?success=true'
    res.redirect(redirectUrl);

});

router.post('/move_to_lodging', (req, res) => {
    const { park_id } = req.body;
    res.redirect(`/lodging/${park_id}`);
});


module.exports = router;