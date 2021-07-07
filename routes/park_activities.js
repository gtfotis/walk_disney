'use strict';
const express = require('express');
const router = express.Router();
const ActivitiesModel = require('../models/ParkActivitiesModel');


router.get('/', async (req, res) => {
    const user_id = 1; 
    const { parks_id } = req.body // remember to add user_id in here and remove from line 8 once login is sorted
    const thePark = await ActivitiesModel.getActivities(parks_id, user_id);
    res.render('template', {
        locals: {
            title: 'Select Activities',
            thePark: thePark
        },
        partials: {
            body: 'partials/park_activities'
        }
    })
})
module.exports = router;