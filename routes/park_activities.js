'use strict';
const express = require('express');
const router = express.Router();
const ActivitiesModel = require('../models/ParkActivitiesModel');


router.get('/', async (req, res) => {
    const { parks_id } = req.body;
    const thePark = await ActivitiesModel.getActivities(parks_id);
    res.render('template', {
        locals: {
            title: 'Walk Disney | Choose Your Activities',
            thePark: thePark,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/park_activities'
        }
    })
});

router.post('/add_activity', async (req, res) => {
    const { activity_id, park_id } = req.body;
    const user_id = req.session.user_id;
    const response = await ActivitiesModel.addActivity( user_id, activity_id, park_id);
    
    const referral = req.header('Referrer');
    const rootUrl = referral.split('?');
    const redirectUrl = rootUrl[0] + '?success=true'
    res.redirect(redirectUrl);

});

router.post('/dining', (req, res) => {
    const { park_id } = req.body;
    res.redirect(`/dining/${park_id}`);
})

module.exports = router;