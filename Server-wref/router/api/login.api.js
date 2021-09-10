const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user.controller')

const passport = require('passport')
const passportConfig = require('../../middlewares/passport')

router.post('/signin', passport.authenticate('local', { session: false }), controller.postSignIn)

router.post('/signup', controller.postSignUp)

module.exports = router