'use strict';
const express = require('express');
const router = express.Router();
const ActivitiesModel = require('../models/ParkActivitiesModel');


router.get('/', async (req, res) => {
    const { parks_id } = req.body // remember to add user_id in here and remove from line 8 once login is sorted
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
    const { plan_id } = req.session; 
    console.log('REQ SESSION IS: ', req.session);
    const { activity_id, park_id } = req.body;

    const response = await ActivitiesModel.addActivity(plan_id, activity_id);
    console.log('ADD ACTIVITY RESPONSE IS: ', response);
    res.redirect(`/dining/${park_id}`);

});

module.exports = router;