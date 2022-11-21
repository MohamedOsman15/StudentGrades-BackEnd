const { Student } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.findAll()
    res.send(allStudents)
  } catch (error) {
    throw error
  }
}

const GetOneStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    res.send(student)
  } catch (error) {
    throw error
  }
}

const createStudent = async (req, res) => {
  try {
    const studentInfo = { ...req.body }
    const student = await Student.create(studentInfo)
    res.send(studentInfo)
  } catch (error) {
    throw error
  }
}

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = parseInt(req.params.id)
    await Student.destroy({ where: { id: deletedStudent } })
    res.send({ message: `Deleted student with an ID of ${deletedStudent}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetOneStudent,
  createStudent,
  deleteStudent
}
