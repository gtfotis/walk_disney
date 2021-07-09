'use strict';
const express = require('express');
const router = express.Router();
const ItineraryModel = require('../models/ItineraryModel');

router.get('/', async (req, res) => {
    const user_id = req.session.user_id;
    const theItinerary = await ItineraryModel.getPlan(user_id);
    const lodgingData = await ItineraryModel.getLodging(user_id);
    res.render('template', {
        locals: {
            title: 'Final Itinerary',
            itinerary_data: theItinerary,
            lodging_data: lodgingData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user,
            first_name: req.session.first_name
       
        },
        partials: {
            body: 'partials/itinerary'
        }
    })
});


router.post('/delete_activity', async (req, res) => {
    const { activity_id } = req.body;
    const user_id = req.session.user_id;
    console.log(req.body);
    const response = await ItineraryModel.removeActivity(activity_id, user_id);
    console.log('UPDATE RESPONSE, ', response);
    res.redirect('back');

});

router.post('/delete_lodging', async (req, res) => {
    const { lodging_id } = req.body;
    const user_id = req.session.user_id;
    const response = await ItineraryModel.removeLodging(lodging_id, user_id);
    console.log('DELETE LODGING RESPONSE: ', response);
    res.redirect('back');
});

router.post('/delete_food', async (req, res) => {
    const { food_id } = req.body;
    const user_id = req.session.user_id;
    const response = await ItineraryModel.removeFood(food_id, user_id)
    res.redirect('back');
});


module.exports = router;