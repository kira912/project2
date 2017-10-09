const express = require('express')
const passport = require('passport')
const ensureLogin = require('connect-ensure-login')

const siteController = express.Router()

const User = require('../models/user')

