const { Students } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const student = await Students.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      student &&
      (await middleware.comparePassword(
        student.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: student.id,
        email: student.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const student = await Patrons.create({ email, passwordDigest, name })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const student = await Students.findOne({
      where: { email: req.body.email }
    })
    if (
      student &&
      (await middleware.comparePassword(
        student.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Success', msg: 'Password updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  console.log('in check session')
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}