'use strict';
const express = require('express');
const router = express.Router();
const ItineraryModel = require('../models/ItineraryModel');

router.get('/', async (req, res) => {
    const user_id = 1; // Change this with req.session.user_id once in the code. 
    const theItinerary = await ItineraryModel.getPlan(user_id);
    const lodgingData = await ItineraryModel.getLodging(user_id);
    res.render('template', {
        locals: {
            title: 'Final Itinerary',
            user_id: 1, // replace with req.session.user_id once in the code.
            itinerary_data: theItinerary,
            lodging_data: lodgingData
        },
        partials: {
            body: 'partials/itinerary'
        }
    })
})
module.exports = router;