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

const createStudent = async (req, res) => {
  try {
    const studentInfo = {...req.body }
    const student = await Students.create(studentInfo)
    res.send(studentInfo)
  } catch (error) {
    throw error
  }
}

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = parseInt(req.params.id)
    await Students.destroy({where: {id: deletedStudent}})
    res.send({message: `Deleted student with an ID of ${deletedStudent}`})
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
