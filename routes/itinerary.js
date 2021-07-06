'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Final Itinerary'
        },
        partials: {
            body: 'partials/itinerary'
        }
    })
})
module.exports = router;