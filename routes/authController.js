const express = require('express')
const passport = require('passport')
const authController = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('../middlewares/auth')


authController.get('/signup', ensureLoggedOut, (req, res) => {
    res.render('auth/signup', {
        message: req.flash('error')
    })
})

authController.get('/login', ensureLoggedOut, (req, res) => {
    res.render('auth/login', {
        message: req.flash('error')
    })
})

authController.get('/logout', ensureLoggedIn, (req, res, next) => {
    req.logout()
    res.redirect('/login')
})

authController.post('/signup', ensureLoggedOut, passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true,
}))

authController.post('/login', ensureLoggedOut, passport.authenticate('local-login', {
    successRedirect: '/private/home',
    failureRedirect: '/login',
    failureFlash: true,
}))

module.exports = authController
