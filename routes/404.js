const express = require('express')
const router = express.Router();


router.get('*', (req, res) => {
    res.render('template', {
        locals: {
            title: '404',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/404'
        }
    })
});


module.exports = router;
