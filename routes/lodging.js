'use strict';
const express = require('express');
const router = express.Router();
const LodgingModel = require('../models/LodgingModel');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const lodging = await LodgingModel.getLodging(id);
    res.render('template', {
        locals: {
            title: 'Walk Disney | Choose Your Lodging',
            lodgingData: lodging,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/lodging'
        }
        
    });
});


router.post('/add', async (req, res) => {
    const { plan_id } = req.session;
    const { lodging_id } = req.body;
    const response = await LodgingModel.addLodging(plan_id, lodging_id);
    res.redirect('/itinerary');

});

module.exports = router;