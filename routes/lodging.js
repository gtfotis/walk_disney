'use strict';
const express = require('express');
const router = express.Router();
const LodgingModel = require('../models/LodgingModel');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const lodging = await LodgingModel.getLodging(id);
    console.log('LODGING: ', lodging)
    res.render('template', {
        locals: {
            title: 'Lodging Page',
            lodgingData: lodging
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
    console.log('LODGING RESPONSE IS: ', response);
    res.redirect('/itinerary');

});

module.exports = router;