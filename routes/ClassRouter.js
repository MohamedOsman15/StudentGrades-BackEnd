const router = require('express').Router()
const controller = require('../controllers/ClassController')
const middleware = require('../middleware')

// router.get(
//   '/',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.GetAllClasses
// )

router.get(
  '/:id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetOneClass
)
router.post(
  '/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateClass
)

router.put(
  '/:classid',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateClass
)

module.exports = router
