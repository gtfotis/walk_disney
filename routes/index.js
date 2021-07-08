'use strict';
const express = require('express');
const router = express.Router();
const UsersModel = require('../models/UsersModel')

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Walk Disney'
        },
        partials: {
            body: 'partials/index'
        }
    })
})

module.exports = router;