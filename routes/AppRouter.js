const router = require('express').Router()
const StudentRouter = require('../routes/StudentRouter')
const ClassRouter = require('../routes/ClassRouter')

router.use('/students', StudentRouter)
router.use('/classes', ClassRouter)

module.exports = router
