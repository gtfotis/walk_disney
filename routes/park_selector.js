'use strict';
const express = require('express');
const router = express.Router();
const ParkSelectorModel = require('../models/ParkSelectorModel');

router.get('/:slug?', async(req, res) => {
    if (!!req.params.slug) {
        const { slug } = req.params;
        const thePark = await ParkSelectorModel.getBySlug(slug);
        const theParkData = await ParkSelectorModel.getActivities(thePark.id);
        res.render('template', {
            locals: {
                title: 'Make a Plan',
                data: theParkData
            },
            partials: {
                body: 'partials/park_activities'
            }
        });
    } else {
        const parkData = await ParkSelectorModel.getAll();
        res.render('template', {
            locals: {
                title: 'Select a Park',
                data: parkData
            },
            partials: {
                body: 'partials/park_selector'
            }
        })
    }
});


router.post('/update', async (req, res) => {
    const { parks_id, park_slug } = req.body;
    console.log('REQ BODY IS: ', req.body);
    const user_id = 1; //this will also have to change!!
    const newItinerary = new ParkSelectorModel(null, user_id, parks_id, null, null, null);
    console.log(newItinerary)
    const response = await newItinerary.addParkId();
    if (response.rowCount >= 1) {
        // Directs to the appropriate park's activities page. 
        res.redirect(`/park_selector/${park_slug}`);
    } else {
        res.sendStatus(500);
    }

});



module.exports = router;