'use strict';
const express = require('express');
const router = express.Router();
const ActivitiesModel = require('../models/ParkActivitiesModel');


router.get('/', async (req, res) => {
    const { parks_id } = req.body;
    const thePark = await ActivitiesModel.getActivities(parks_id);
    res.render('template', {
        locals: {
            title: 'Select Activities',
            thePark: thePark,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/park_activities'
        }
    })
});

router.post('/add_activity', async (req, res) => {
    // const { plan_id } = req.session; 
    console.log('REQ SESSION IS: ', req.session);
    const { activity_id, park_id } = req.body;
    const user_id = req.session.user_id;
    const response = await ActivitiesModel.addActivity( user_id, activity_id, park_id);
    console.log('ADD ACTIVITY RESPONSE IS: ', response);
    // res.redirect(`/dining/${park_id}`); //use this with a hidden input form to move on it a different route.
    res.redirect('back');

});

router.post('/dining', (req, res) => {
    const { park_id } = req.body;
    console.log('PARK ID REQ BODY IS: ', req.body);
    res.redirect(`/dining/${park_id}`);
})

module.exports = router;