const router = require('express').Router()

// const StudentRouter = require('./StudentRouter')
const ClassRouter = require('./ClassRouter')
// const AuthRouter = require('./AuthRouter')
const StudentClassListRouter = require('./StudentClassListRouter')
// router.use('/student', StudentRouter)
router.use('/class', ClassRouter)
// router.use('/auth', AuthRouter)
router.use('/studentclasslist', StudentClassListRouter)

module.exports = router
