const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Walk Disney | 403 Error',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/403'
        }
    })
});

module.exports = router;
