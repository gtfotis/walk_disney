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
            lodging_data: lodgingData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/itinerary'
        }
    })
});


router.post('/update', async (req, res) => {
    const { activity_id } = req.body;
    console.log(req.body);
    const response = await ItineraryModel.removeActivity(activity_id);
    console.log('UPDATE RESPONSE, ', response);
    res.redirect('back');

});

router.post('/delete_lodging', async (req, res) => {
    const { lodging_id } = req.body;
    const response = await ItineraryModel.removeLodging(lodging_id);
    console.log('DELETE LODGING RESPONSE: ', response);
    res.redirect('back');
})



module.exports = router;