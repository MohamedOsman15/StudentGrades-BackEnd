const { Student, Class, StudentClassLists, sequelize } = require('../models')

const getStudentClasses = async (req, res) => {
  try {
    const data = await Student.findAll({
      where: { id: req.params.id },
      include: [{ model: Class, as: 'class_list', through: [] }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports = {
  getStudentClasses
}
