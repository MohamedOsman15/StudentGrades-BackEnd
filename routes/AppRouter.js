const router = require('express').Router()

const StudentRouter = require('./StudentRouter')
const ClassRouter = require('./ClassRouter')
const AuthRouter = require('./AuthRouter')
const StudentClassListRouter = require('./StudentClassListRouter')

router.use('/students', StudentRouter)
router.use('/classes', ClassRouter)
router.use('/auth', AuthRouter)
router.use('/studentclasslist', StudentClassListRouter)

module.exports = router
