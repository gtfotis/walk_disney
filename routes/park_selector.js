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




module.exports = router;