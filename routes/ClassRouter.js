const router = require('express').Router()
const controller = require('../controllers/ClassController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetGigs
)