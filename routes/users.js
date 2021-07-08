const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const UsersModel = require('../models/UsersModel')

router.get('/register', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register',
        },
        partials: {
            body: 'partials/register'
        }
    })
})

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login',
        },
        partials: {
            body: 'partials/login'
        }
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

router.post('/register', async (req, res) => {
    const { first_name, last_name, user_email, user_password } = req.body;

    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(user_password, salt)

    const response = await UsersModel.addUser(first_name, last_name, user_email, hash);
    if (!!response.id) {
        res.redirect('/users/login');
    } else {
        res.send("ERROR: Please try again.").status(500);
    }
})

router.post('/login', async (req, res) => {
    const { user_email, user_password } = req.body;
    console.log(user_email, user_password)
    const user = new UsersModel(null, null, null, user_email, user_password)
    const response = await user.login();

    if (!!response.isValid) {
        const { isValid, user_id, first_name, last_name } = response;
        req.session.is_logged_in = isValid;
        req.session.user_id = user_id;
        req.session.first_name = first_name;
        req.session.last_name = last_name;

        res.redirect('/');

    } else {
        res.sendStatus(403);
    }
})

module.exports = router;