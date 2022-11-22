const { Student, Class, StudentClassLists, sequelize } = require('../models')

const getStudentClasses = async (req, res) => {
  try {
    const data = await Student.findOne({
      where: { id: req.params.id },
      include: [{ model: Class, as: 'class_list', through: [] }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const getAllStudentClasses = async (req, res) => {
  try {
    const data = await Student.findAll({
      include: [{ model: Class, as: 'class_list', through: [] }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports = {
  getStudentClasses,
  getAllStudentClasses
}
