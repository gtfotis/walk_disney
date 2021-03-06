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
                data: theParkData,
                parkId: thePark.id,
                is_logged_in: req.session.is_logged_in,
                user_id: req.session.user
            },
            partials: {
                body: 'partials/park_activities'
            }
        });
    } else {
        const parkData = await ParkSelectorModel.getAll();
        res.render('template', {
            locals: {
                title: 'Walk Disney | Choose a Park',
                data: parkData,
                is_logged_in: req.session.is_logged_in
            },
            partials: {
                body: 'partials/park_selector'
            }
        })
    }
});


router.post('/update', async (req, res) => {
    const { parks_id, park_slug } = req.body;
    const user_id = req.session.user_id;
    const newItinerary = new ParkSelectorModel(null, user_id, parks_id, null, null, null);
    const response = await newItinerary.addParkId();

    if (!!response.id) {
        req.session.plan_id = response.id;
        res.redirect(`/park_selector/${park_slug}`);
    } else {
        res.sendStatus(500);
    }

});



module.exports = router;