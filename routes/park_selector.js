'use strict';
const express = require('express');
const router = express.Router();
const ParkSelectorModel = require('../models/ParkSelectorModel');

router.get('/:slug?', async(req, res) => {
    if (!!req.params.slug) {
        const { slug } = req.params;
        const thePark = await ParkSelectorModel.getBySlug(slug);
        const { id } = req.params;
        console.log(id);
        // const theParkData = await ParkSelectorModel.getActivities(id);
        res.render('template', {
            locals: {
                title: 'Park Activities',
                data: thePark,
                // theParkData
            },
            partials: {
                body: 'partials/park_activities'
            }
        });
    } else {
        const parkData = await ParkSelectorModel.getAll();
        res.render('template', {
            locals: {
                title: 'Park Selector',
                data: parkData
            },
            partials: {
                body: 'partials/park_selector'
            }
        })
    }
});




module.exports = router;