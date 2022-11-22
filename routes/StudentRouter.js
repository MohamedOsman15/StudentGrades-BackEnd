const router = require('express').Router()
const controller = require('../controllers/StudentController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllStudents
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createStudent
)

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetOneStudent
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteStudent
)

module.exports = router
