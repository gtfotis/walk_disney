'use strict';
const express = require('express');
const router = express.Router();
const ParkSelector = require('../models/ParkSelectorModel')
router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Park Selector',
            data: ParkSelector
        },
        partials: {
            body: 'partials/park_selector'
        }
    })
})
module.exports = router;