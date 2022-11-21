const { Students } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const Students = await Students.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetOneStudent = async (req, res) => {
  try {
    const student = await Students.findByPk(req.params.id)
    res.send(student)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetOneStudent,
}
