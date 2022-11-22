const router = require('express').Router()
const controller = require('../controllers/StudentClassListController')
const middleware = require('../middleware')

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getStudentClasses
)
router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getAllStudentClasses
)

module.exports = router
