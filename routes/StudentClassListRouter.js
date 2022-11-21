const router = require('express').Router()
const controller = require('../controllers/StudentClassListController')

router.get('/:id', controller.getStudentClasses)

module.exports = router
