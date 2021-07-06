'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Select Activities'
        },
        partials: {
            body: 'partials/activities'
        }
    })
})
module.exports = router;